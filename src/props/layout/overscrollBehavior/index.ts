export interface OverscrollBehaviorProps {
  overscrollBehavior?: overscrollBehaviorValues;
  overscrollBehaviorX?: overscrollBehaviorValues;
  overscrollBehaviorY?: overscrollBehaviorValues;
}

export type overscrollBehaviorValues = "auto" | "contain" | "none";
