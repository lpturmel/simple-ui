import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mergeClasses } from "../../../props/global";

export interface ModalFooterProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalFooter: Component<ModalFooterProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("ModalFooter", props));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
