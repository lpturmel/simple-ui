export interface RotateProps {
	rotate?: RotateValues;
}

export type RotateValues =
	| 0
	| 1
	| 2
	| 3
	| 6
	| 12
	| 45
	| 90
	| 180
	| -180
	| -90
	| -45
	| -12
	| -6
	| -3
	| -2
	| -1;
