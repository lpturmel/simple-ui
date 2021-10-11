export interface HueRotateProps {
	hueRotate?: HueRotateValues;
}

export type HueRotateValues =
	| -180
	| -90
	| -60
	| -30
	| -15
	| 0
	| 15
	| 30
	| 60
	| 90
	| 180;
