export interface BackgroundRepeatProps {
  backgroundRepeat?: BackgroundRepeatValues;
}

export type BackgroundRepeatValues =
  | "repeat"
  | "no-repeat"
  | "repeat-x"
  | "repeat-y"
  | "round"
  | "space";
