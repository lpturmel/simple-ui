import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const defaultProps: PropsWithChildren<ButtonProps> = {
		px: 4,
		py: 2,
		borderRadius: "md",
		fontSize: "lg",
		fontWeight: "semibold",
		color: "white",
	};

	const mergedProps = parseDefaultProps<ButtonProps>(props, defaultProps);

	const tw = mapPropsToCss<PropsWithChildren<ButtonProps>>(mergedProps);

	return (
		<button {...props} class={tw}>
			{props.children}
		</button>
	);
};
