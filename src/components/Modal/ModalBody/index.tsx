import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalBody: Component<ModalBodyProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalBodyDefaultProps = context.theme.Components?.ModalBody;

	const mergedProps = parseDefaultProps<ModalBodyProps>(
		props,
		modalBodyDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<ModalBodyProps>>(mergedProps);

	return <div class={tw}>{props.children}</div>;
};
export default ModalBody;
