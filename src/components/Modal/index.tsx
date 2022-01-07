import { Accessor, Component, createEffect, createSignal, JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { ICreateControls } from "../..";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface ModalProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {
	isOpen: Accessor<boolean>;
	controls: ICreateControls;
}
export const Modal: Component<ModalProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Modal", props));
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			props.controls.close();
		}
	});

	return (
		<>
			{props.isOpen() && (
				<Portal mount={document.getElementById("simple-ui-portal")!}>
					<div class={simpleProps()}>{props.children}</div>
				</Portal>
			)}
		</>
	);
};
