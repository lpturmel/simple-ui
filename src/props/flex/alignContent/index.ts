export interface AlignContentProps {
	alignContent?: AlignContentValues;
}

export type AlignContentValues =
	| "center"
	| "start"
	| "end"
	| "between"
	| "around"
	| "evenly";
