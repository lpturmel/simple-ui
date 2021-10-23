import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface LinkProps
	extends MainProps<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const Link: Component<LinkProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Link", props));
	});

	return (
		<a {...props} class={simpleProps()}>
			{props.children}
		</a>
	);
};
