export interface BackgroundAttachmentProps {
  backgroundAttachment?: BackgroundAttachmentValues;
}

export type BackgroundAttachmentValues = "bg-fixed" | "bg-local" | "bg-scroll";
