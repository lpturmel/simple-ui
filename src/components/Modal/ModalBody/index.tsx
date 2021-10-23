import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mergeClasses } from "../../../props/global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalBody: Component<ModalBodyProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("ModalBody", props));
	});

	return <div class={simpleProps()}>{props.children}</div>;
};
