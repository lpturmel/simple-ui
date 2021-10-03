export interface ObjectFitProps {
  objectFit?: ObjectFitValues;
}

export type ObjectFitValues =
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "scale-down";
