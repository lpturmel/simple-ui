import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface TextProps
	extends MainProps<JSX.HTMLAttributes<HTMLParagraphElement>> {}

export const Text: Component<TextProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Text", props));
	});
	return (
		<p {...props} class={simpleProps()}>
			{props.children}
		</p>
	);
};
