import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface VStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const VStack: Component<VStackProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("VStack", props));
	});
	return (
		<div {...props} class={simpleProps()}>
			{props.children}
		</div>
	);
};
