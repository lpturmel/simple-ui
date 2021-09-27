import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const buttonDefaultProps = context.theme.Components?.Button?.defaultProps;
	console.log(buttonDefaultProps);
	const mergedProps = parseDefaultProps<ButtonProps>(
		props,
		buttonDefaultProps!
	);
	// Add
	const simpleProps = mapPropsToCss<PropsWithChildren<ButtonProps>>(
		mergedProps
	);

	return (
		<button {...props} class={simpleProps}>
			{props.children}
		</button>
	);
};
