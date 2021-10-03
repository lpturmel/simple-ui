import { SimpleColorValues } from "../../Global";

export interface RingColorProps {
	ringColor?: RingColorValues;
}

export type RingColorValues = "transparent" | "current" | SimpleColorValues;
