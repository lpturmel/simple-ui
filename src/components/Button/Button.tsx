import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const buttonDefaultProps =
		context.defaultTheme.Components?.Button?.defaultProps;
	const buttonThemeProps = context.theme?.Components?.Button?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...buttonDefaultProps,
		...buttonThemeProps,
	});
	// Add
	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<button {...props} class={simpleProps}>
			{props.children}
		</button>
	);
};
