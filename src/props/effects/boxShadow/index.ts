export interface BoxShadowProps {
	boxShadow?: BoxShadowValues;
}

export type BoxShadowValues =
	| "shadow-xs"
	| "shadow-sm"
	| "shadow-md"
	| "shadow-lg"
	| "shadow-xl"
	| "shadow-2xl"
	| "shadow-inner"
	| "shadow-none";
