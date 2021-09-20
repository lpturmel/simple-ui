import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const defaultProps: PropsWithChildren<HStackProps> = {
		display: "flex",
		flexDirection: "row",
	};
	const mergedProps = parseDefaultProps<HStackProps>(props, defaultProps);

	const tw = mapPropsToCss<PropsWithChildren<HStackProps>>(mergedProps);

	return (
		<div {...props} class={tw}>
			{props.children}
		</div>
	);
};
