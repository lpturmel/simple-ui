import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalFooterProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalFooter: Component<ModalFooterProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("ModalFooter", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
