export interface OverflowProps {
	overflow?: overflowValues;
	overflowX?: overflowValues;
	overflowY?: overflowValues;
}

export type overflowValues = "auto" | "hidden" | "visible" | "scroll";
