import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

export interface VStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const VStack: Component<VStackProps> = (props) => {
	const tw = mapPropsToTw<PropsWithChildren<VStackProps>>(props);

	return (
		<div {...props} class={tw}>
			{props.children}
		</div>
	);
};
