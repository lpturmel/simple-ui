import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface LinkProps
	extends MainProps<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const Link: Component<LinkProps> = (props) => {
	const mergedProps = mergeProps("Link", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<a {...props} class={simpleProps}>
			{props.children}
		</a>
	);
};
