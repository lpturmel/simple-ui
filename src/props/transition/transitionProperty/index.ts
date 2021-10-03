export interface TransitionProps {
	transition?: TransitionValues;
}

export type TransitionValues =
	| "none"
	| "basic"
	| "colors"
	| "opacity"
	| "shadow"
	| "transform"
	| "all";
