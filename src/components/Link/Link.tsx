import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface LinkProps
	extends MainProps<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const Link: Component<LinkProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("Link", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return (
		<a {...props} class={simpleProps()}>
			{props.children}
		</a>
	);
};
