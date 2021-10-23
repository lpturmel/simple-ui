import { Component, createEffect, createSignal, JSX } from "solid-js";
import { mergeClasses } from "../../props/global";
import MainProps from "../../props";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Button", props));
	});

	return (
		<button {...props} class={simpleProps()}>
			{props.children}
		</button>
	);
};
