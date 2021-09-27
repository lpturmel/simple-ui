import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";
import { Button } from "../../Button";

export interface ModalFooterProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalFooter: Component<ModalFooterProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalFooterDefaultProps = context.theme.Components?.ModalFooter;

	const mergedProps = parseDefaultProps<ModalFooterProps>(
		props,
		modalFooterDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<ModalFooterProps>>(mergedProps);

	return <div class={tw}>{props.children}</div>;
};
export default ModalFooter;
