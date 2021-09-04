import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../props";
import { mapPropsToTw } from "../props/Global";

interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button: Component<ButtonProps> = (props) => {
	const startTime = performance.now();
	const tw = mapPropsToTw<PropsWithChildren<ButtonProps>>(props);

	const endTime = performance.now();

	//console.log("Button took: ", endTime - startTime);
	return (
		<button
			{...props}
			class={`${tw} transition-colors duration-200 ease-in-out border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-semibold rounded-lg`}
		>
			{props.children}
		</button>
	);
};
export default Button;
