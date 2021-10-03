export interface ObjectFitProps {
  objectFit?: objectFitValues;
}

export type objectFitValues =
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "scale-down";
