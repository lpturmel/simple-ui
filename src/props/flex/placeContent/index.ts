export interface PlaceContentProps {
	placeContent?: PlaceContentValues;
}

export type PlaceContentValues =
	| "center"
	| "start"
	| "end"
	| "between"
	| "around"
	| "evenly"
	| "stretch";
