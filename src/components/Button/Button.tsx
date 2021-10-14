import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("Button", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return (
		<button {...props} class={simpleProps()}>
			{props.children}
		</button>
	);
};
