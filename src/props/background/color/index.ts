import { SimpleColorValues } from "../../Global";

export interface BackgroundColorProps {
	backgroundColor?: BackgroundColorValues;
}

export type BackgroundColorValues =
	| "transparent"
	| "current"
	| SimpleColorValues;
