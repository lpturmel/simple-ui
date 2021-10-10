export interface BackgroundImageProps {
  backgroundImage?: BackgroundImageValues;
}

export type BackgroundImageValues =
  | "none"
  | "to-t"
  | "to-tr"
  | "to-r"
  | "to-br"
  | "to-b"
  | "to-bl"
  | "to-l"
  | "to-tl";
