export interface AlignItemsProps {
	alignItems?: AlignItemsValues;
}

export type AlignItemsValues =
	| "start"
	| "end"
	| "center"
	| "baseline"
	| "stretch";
