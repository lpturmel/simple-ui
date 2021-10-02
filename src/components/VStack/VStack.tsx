import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface VStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const VStack: Component<VStackProps> = (props) => {
	const mergedProps = mergeProps("VStack", props);

	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<div {...props} class={simpleProps}>
			{props.children}
		</div>
	);
};
