import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mergeClasses } from "../../../props/global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalContent: Component<ModalContentProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("ModalContent", props));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
