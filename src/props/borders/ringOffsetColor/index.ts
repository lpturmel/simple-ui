import { SimpleColorValues } from "../../Global";

export interface RingOffsetColorProps {
	ringOffsetColor?: RingOffsetColorValues;
}

export type RingOffsetColorValues =
	| "transparent"
	| "current"
	| SimpleColorValues;
