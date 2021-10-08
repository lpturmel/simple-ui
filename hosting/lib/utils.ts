export function formatResourceName(
	PREFIX: string,
	value: string,
	STAGE: string
) {
	return `${PREFIX}-${value}-${STAGE}`;
}
