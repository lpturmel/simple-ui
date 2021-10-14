import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalBody: Component<ModalBodyProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("ModalBody", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
