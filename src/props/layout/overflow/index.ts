export interface OverflowProps {
  overflow?: OverflowValues;
  overflowX?: OverflowValues;
  overflowY?: OverflowValues;
}

export type OverflowValues = "auto" | "hidden" | "visible" | "scroll";
