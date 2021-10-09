export interface CursorProps {
	cursor?: CursorValues;
}

export type CursorValues =
	| "auto"
	| "default"
	| "pointer"
	| "wait"
	| "text"
	| "move"
	| "help"
	| "not-allowed";
