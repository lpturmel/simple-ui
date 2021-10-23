import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mergeClasses } from "../../../props/global";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("ModalHeader", props));
	});
	return <div class={simpleProps()}>{props.children}</div>;
};
