import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface DividerProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const Divider: Component<DividerProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("Divider", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});
	return (
		<>
			<hr class={simpleProps()} />
		</>
	);
};
