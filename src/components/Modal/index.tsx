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
	const [context] = useContext(SimpleContext);

	const modalDefaultProps = context.theme.Components?.Modal?.defaultProps;

	const mergedProps = parseDefaultProps(props, modalDefaultProps!);
	const tw = mapPropsToCss(mergedProps, true);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			props.controls.close();
		}
	});
	return (
		<>
			{props.isOpen() && (
				<Portal mount={context.portal!}>
					{" "}
					<div class={tw}>{props.children}</div>
				</Portal>
			)}
		</>
	);
};
