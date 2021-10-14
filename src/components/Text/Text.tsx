import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface TextProps
	extends MainProps<JSX.HTMLAttributes<HTMLParagraphElement>> {}

export const Text: Component<TextProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("Text", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});
	return (
		<p {...props} class={simpleProps()}>
			{props.children}
		</p>
	);
};
