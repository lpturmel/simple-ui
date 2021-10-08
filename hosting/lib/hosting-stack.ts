import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import { formatResourceName } from "./utils";
import * as cm from "@aws-cdk/aws-certificatemanager";
import * as dns from "@aws-cdk/aws-route53";
import * as targets from "@aws-cdk/aws-route53-targets";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import * as S3Deployment from "@aws-cdk/aws-s3-deployment";
import { Duration } from "@aws-cdk/core";
import { join } from "path";

const PREFIX = "simple-ui";
const DOMAIN_NAME = `${PREFIX}.io`;

export class HostingStack extends cdk.Stack {
	constructor(
		scope: cdk.Construct,
		id: string,
		props?: cdk.StackProps & { stage: "staging" | "prod" }
	) {
		super(scope, id, props);

		const hostedZone = dns.HostedZone.fromLookup(this, PREFIX, {
			domainName: DOMAIN_NAME,
		});
		const certificateName = "*." + DOMAIN_NAME;

		const certificate = new cm.DnsValidatedCertificate(
			this,
			PREFIX + "-frontend-certificate",
			{
				domainName: certificateName,
				hostedZone,
				region: "us-east-1",
				subjectAlternativeNames: [DOMAIN_NAME],
			}
		);

		const s3Bucket: s3.IBucket = new s3.Bucket(
			this,
			formatResourceName(PREFIX, "website", props!.stage),
			{
				bucketName: formatResourceName(PREFIX, "website", props!.stage),
				publicReadAccess: false,
			}
		);

		const cachePolicy = new cloudfront.CachePolicy(
			this,
			formatResourceName(PREFIX, "cache-policy", props!.stage),
			{
				cachePolicyName: formatResourceName(
					PREFIX,
					"cache-policy",
					props!.stage
				),
				comment:
					"The default policy for the web distribution based on CachingOptimized",
				minTtl: Duration.seconds(1),
				maxTtl: Duration.days(365),
				defaultTtl: Duration.days(1),
				enableAcceptEncodingGzip: true,
				enableAcceptEncodingBrotli: true,
			}
		);

		const domainNames =
			props!.stage === "prod"
				? [DOMAIN_NAME, "www." + DOMAIN_NAME]
				: [props!.stage + "." + DOMAIN_NAME];

		const cnameValue = props!.stage === "prod" ? "www" : props!.stage;

		const cdn = new cloudfront.Distribution(
			this,
			formatResourceName(PREFIX, "cdn", props!.stage),
			{
				defaultBehavior: {
					origin: new origins.S3Origin(s3Bucket, {}),
					cachePolicy,
					viewerProtocolPolicy:
						cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
					compress: true,
					allowedMethods:
						cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
				},
				domainNames,

				certificate,
				defaultRootObject: "index.html",
				priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
				errorResponses: [
					{
						httpStatus: 403,
						ttl: Duration.seconds(0),
						responseHttpStatus: 200,
						responsePagePath: "/index.html",
					},
					{
						httpStatus: 404,
						ttl: Duration.seconds(0),
						responseHttpStatus: 200,
						responsePagePath: "/index.html",
					},
				],
				enableIpv6: true,
			}
		);

		if (props!.stage === "prod") {
			// Apex record
			new dns.ARecord(this, "AliasRecord", {
				zone: hostedZone,
				target: dns.RecordTarget.fromAlias(
					new targets.CloudFrontTarget(cdn)
				),
			});
		}

		new dns.CnameRecord(
			this,
			formatResourceName(
				PREFIX,
				"record-" + "CNAME" + "-" + cnameValue,
				props?.stage!
			),
			{
				zone: hostedZone,
				recordName: cnameValue,
				domainName: cdn.domainName,
			}
		);

		new S3Deployment.BucketDeployment(this, "website", {
			sources: [
				S3Deployment.Source.asset(
					join(__dirname, "..", "..", "website", "dist")
				),
			],
			distribution: cdn,
			distributionPaths: ["/index.html"],
			destinationBucket: s3Bucket,
		});
	}
}
