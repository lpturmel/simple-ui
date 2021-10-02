import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}

export const Input: Component<InputProps> = (props) => {
	const mergedProps = mergeProps("Input", props);

	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<input
			{...props}
			class={`${simpleProps} transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700`}
		/>
	);
};
