import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mergeClasses } from "../../../props/global";

export interface ModalOverlayProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalOverlay: Component<ModalOverlayProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("ModalOverlay", props));
	});
	return (
		<div
			class={simpleProps()}
			style={{ background: "rgba(0, 0, 0, 0.48)" }}
		></div>
	);
};
