export interface ObjectPositionProps {
  objectPosition?: objectPositionValues;
}

export type objectPositionValues =
  | "bottom"
  | "center"
  | "left"
  | "left bottom"
  | "left top"
  | "right"
  | "right bottom"
  | "right top"
  | "top";
