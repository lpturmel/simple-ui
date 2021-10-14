import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("HStack", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});
	return (
		<div {...props} class={simpleProps()}>
			{props.children}
		</div>
	);
};
