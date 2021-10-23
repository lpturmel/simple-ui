import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("HStack", props));
	});
	return (
		<div {...props} class={simpleProps()}>
			{props.children}
		</div>
	);
};
