import { SimpleColorValues } from "../../Global";

export interface DivideColorProps {
	divideColor?: DivideColorValues;
}

export type DivideColorValues = "transparent" | "current" | SimpleColorValues;
