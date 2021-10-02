import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const mergedProps = mergeProps("Button", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<button {...props} class={simpleProps}>
			{props.children}
		</button>
	);
};
