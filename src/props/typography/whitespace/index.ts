export interface WhitespaceProps {
	whitespace?: WhitespaceValues;
}

export type WhitespaceValues =
	| "normal"
	| "nowrap"
	| "pre"
	| "pre-line"
	| "pre-wrap";
