export interface BackgroundImageProps {
  backgroundImage?: BackgroundImageValues;
}

export type BackgroundImageValues =
  | "bg-gradient-none"
  | "bg-gradient-to-t"
  | "bg-gradient-to-tr"
  | "bg-gradient-to-r"
  | "bg-gradient-to-br"
  | "bg-gradient-to-b"
  | "bg-gradient-to-bl"
  | "bg-gradient-to-l"
  | "bg-gradient-to-tl";
