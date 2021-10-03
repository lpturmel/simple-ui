export interface TransitionTimingProps {
	transitionTiming?: TransitionTimingValues;
}

export type TransitionTimingValues =
	| "ease-linear"
	| "ease-in"
	| "ease-out"
	| "ease-in-out";
