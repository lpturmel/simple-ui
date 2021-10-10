export interface BackgroundClipProps {
  backgroundClip?: BackgroundClipValues;
}

export type BackgroundClipValues =
  | "bg-clip-border"
  | "bg-clip-padding"
  | "bg-clip-content"
  | "bg-clip-text";
