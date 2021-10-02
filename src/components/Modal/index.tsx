import { Accessor, Component, JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { ICreateControls } from "../..";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface ModalProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {
	isOpen: Accessor<boolean>;
	controls: ICreateControls;
}
export const Modal: Component<ModalProps> = (props) => {
	const mergedProps = mergeProps("Modal", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			props.controls.close();
		}
	});

	return (
		<>
			{props.isOpen() && (
				<Portal mount={document.getElementById("simple-ui-portal")!}>
					{" "}
					<div class={simpleProps}>{props.children}</div>
				</Portal>
			)}
		</>
	);
};
