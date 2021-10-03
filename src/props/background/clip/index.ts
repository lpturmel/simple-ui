export interface BackgroundClipProps {
  backgroundClip?: BackgroundClipValues;
}

export type BackgroundClipValues =
  | "border-box"
  | "padding-box"
  | "content-box"
  | "text";
