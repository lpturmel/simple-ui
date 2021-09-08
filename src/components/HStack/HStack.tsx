import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const defaultProps: PropsWithChildren<HStackProps> = {
		display: "flex",
	};
	(Object.keys(props) as Array<keyof HStackProps>).forEach((prop) => {
		(defaultProps as any)[prop] = props[prop];
	});
	const tw = mapPropsToTw<PropsWithChildren<HStackProps>>(defaultProps);

	return (
		<div {...props} class={tw}>
			{props.children}
		</div>
	);
};
