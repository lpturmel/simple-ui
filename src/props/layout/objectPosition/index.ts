export interface ObjectPositionProps {
  objectPosition?: ObjectPositionValues;
}

export type ObjectPositionValues =
  | "bottom"
  | "center"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top";
