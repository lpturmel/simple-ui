export interface OriginProps {
	origin?: OriginValues;
}

export type OriginValues =
	| "center"
	| "top"
	| "top-right"
	| "right"
	| "bottom-right"
	| "bottom"
	| "bottom-left"
	| "left"
	| "top-left";
