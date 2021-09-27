import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}
export const Input: Component<InputProps> = (props) => {
	const [context] = useContext(SimpleContext);
	const inputDefaultProps = context.theme.Components?.Input;

	const mergedProps = parseDefaultProps<InputProps>(
		props,
		inputDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<InputProps>>(mergedProps);
	return (
		<input
			{...props}
			class={`${tw} transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700`}
		/>
	);
};
