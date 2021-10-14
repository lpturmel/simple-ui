import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalContent: Component<ModalContentProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("ModalContent", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
