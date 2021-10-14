import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}

export const Input: Component<InputProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("Input", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return <input {...props} class={simpleProps()} />;
};
