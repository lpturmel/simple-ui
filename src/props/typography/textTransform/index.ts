export interface TextTransformProps {
	textTransform?: TextTransformValues;
}

export type TextTransformValues =
	| "uppercase"
	| "lowercase"
	| "capitalize"
	| "normal-case";
