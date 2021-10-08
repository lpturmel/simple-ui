#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { HostingStack } from "../lib/hosting-stack";
import { config } from "dotenv";

config();

const app = new cdk.App();

const env = {
	account: process.env.CDK_DEFAULT_ACCOUNT,
	region: process.env.CDK_DEFAULT_REGION,
};

new HostingStack(app, "FrontendStack-staging", {
	stage: "staging",
	env,
});

new HostingStack(app, "FrontendStack-prod", {
	stage: "prod",
	env,
});
