import { SimpleColorValues } from "../../Global";

export interface BorderColorProps {
	borderColor?: BorderColorValues;
}
export type BorderColorValues = "transparent" | "current" | SimpleColorValues;
