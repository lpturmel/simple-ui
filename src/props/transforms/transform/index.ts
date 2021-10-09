export interface TransformProps {
	transform?: TransformValues;
}

export type TransformValues = "cpu" | "gpu" | "none";
