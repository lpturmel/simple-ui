export interface BoxShadowProps {
	boxShadow?: BoxShadowValues;
}

export type BoxShadowValues =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "inner"
	| "none";
