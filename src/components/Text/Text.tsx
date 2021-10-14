import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface TextProps
	extends MainProps<JSX.HTMLAttributes<HTMLParagraphElement>> {}

export const Text: Component<TextProps> = (props) => {
	const mergedProps = mergeProps("Text", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<p {...props} class={simpleProps}>
			{props.children}
		</p>
	);
};
