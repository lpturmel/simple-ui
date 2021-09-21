import {
	Accessor,
	Component,
	createEffect,
	createMemo,
	createSignal,
	JSX,
	PropsWithChildren,
	useContext,
} from "solid-js";
import { Portal } from "solid-js/web";
import { ICreateControls } from "../..";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface ModalProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {
	isOpen: Accessor<boolean>;
	controls: ICreateControls;
}
export const Modal: Component<ModalProps> = (props) => {
	const [state]: any = useContext(SimpleContext);

	const defaultProps: PropsWithChildren<ModalProps> = {
		isOpen: props.isOpen,
		controls: props.controls,
		display: "flex",
		flexDirection: "col",
		overflow: "auto",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		height: "screen",
		width: "screen",
		top: 0,
		left: 0,
		zIndex: 50,
	};
	const mergedProps = parseDefaultProps<ModalProps>(props, defaultProps);

	const tw = mapPropsToCss<PropsWithChildren<ModalProps>>(mergedProps);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			props.controls.close();
		}
	});
	return (
		<>
			{props.isOpen() && (
				<Portal mount={state.portal}>
					<div class={tw}>{props.children}</div>
				</Portal>
			)}
		</>
	);
};
