import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss } from "../../props/Global";

export interface VStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const VStack: Component<VStackProps> = (props) => {
	const tw = mapPropsToCss<PropsWithChildren<VStackProps>>(props);

	return (
		<div {...props} class={tw}>
			{props.children}
		</div>
	);
};
