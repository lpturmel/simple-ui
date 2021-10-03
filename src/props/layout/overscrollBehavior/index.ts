export interface OverscrollBehaviorProps {
  overscrollBehavior?: OverscrollBehaviorValues;
  overscrollBehaviorX?: OverscrollBehaviorValues;
  overscrollBehaviorY?: OverscrollBehaviorValues;
}

export type OverscrollBehaviorValues = "auto" | "contain" | "none";
