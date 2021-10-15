export interface AnimateProps {
	animate?: AnimateValues;
}

export type AnimateValues =
	| "none"
	| "fadein"
	| "spin"
	| "ping"
	| "pulse"
	| "bounce";
