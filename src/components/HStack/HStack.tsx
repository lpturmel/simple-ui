import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const mergedProps = mergeProps("HStack", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<div {...props} class={simpleProps}>
			{props.children}
		</div>
	);
};
