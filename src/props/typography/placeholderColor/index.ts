import { SimpleColorValues } from "../../Global";

export interface PlaceholderColorProps {
	placeholderColor?: PlaceholderColorValues;
}

export type PlaceholderColorValues =
	| "transparent"
	| "current"
	| SimpleColorValues;
