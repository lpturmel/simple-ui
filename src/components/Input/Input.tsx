import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}

export const Input: Component<InputProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Input", props));
	});

	return <input {...props} class={simpleProps()} />;
};
