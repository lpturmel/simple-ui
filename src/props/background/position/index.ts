export interface BackgroundPositionProps {
  backgroundPosition?: BackgroundPositionValues;
}

export type BackgroundPositionValues =
  | "bottom"
  | "center"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top";
