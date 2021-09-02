import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../props";
import { mapPropsToTw } from "../props/Global";

interface InputProps
	extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}
const Input: Component<InputProps> = (props) => {
	const tw = mapPropsToTw<PropsWithChildren<InputProps>>(props);
	return (
		<input
			{...props}
			class={`${tw}  transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent  rounded-lg placeholder-gray-700`}
		/>
	);
};
export default Input;
