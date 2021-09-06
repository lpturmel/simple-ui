import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

export interface ButtonProps
	extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

export const Button: Component<ButtonProps> = (props) => {
	const startTime = performance.now();
	const defaultProps: PropsWithChildren<ButtonProps> = {
		px: 4,
		py: 2,
		borderRadius: "md",
		fontSize: "lg",
		fontWeight: "semibold",
		color: "white",
	};
	(Object.keys(props) as Array<keyof MainProps>).forEach((prop) => {
		(defaultProps as any)[prop] = props[prop];
	});

	const tw = mapPropsToTw<PropsWithChildren<ButtonProps>>(defaultProps);
	const endtime = performance.now();
	console.log(`Button took ${endtime - startTime}ms`);
	return (
		<button {...props} class={tw}>
			{props.children}
		</button>
	);
};
