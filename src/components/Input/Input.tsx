import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}

export const Input: Component<InputProps> = (props) => {
	const [context] = useContext(SimpleContext);
	const inputDefaultProps =
		context.defaultTheme.Components?.Input?.defaultProps;
	const inputThemeProps =
		context.defaultTheme.Components?.Input?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...inputDefaultProps,
		...inputThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<input
			{...props}
			class={`${simpleProps} transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700`}
		/>
	);
};
