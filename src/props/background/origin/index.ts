export interface BackgroundOriginProps {
  backgroundOrigin?: BackgroundOriginValues;
}

export type BackgroundOriginValues =
  | "border-box"
  | "padding-box"
  | "content-box";
