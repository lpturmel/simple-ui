import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button: Component<ButtonProps> = (props) => {
	const defaultProps: any = {
		w: 44,
		px: 4,
		py: 2,
	};
	(Object.keys(props) as Array<keyof MainProps>).forEach((prop) => {
		defaultProps[prop] = props[prop];
	});

	const tw = mapPropsToTw<PropsWithChildren<ButtonProps>>(defaultProps);
	console.log(tw);
	return (
		<button {...props} class={tw}>
			{props.children}
		</button>
	);
};
export default Button;
