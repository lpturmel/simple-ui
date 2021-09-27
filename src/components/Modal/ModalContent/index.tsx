import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalContent: Component<ModalContentProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalContentDefaultProps = context.theme.Components?.ModalContent;

	const mergedProps = parseDefaultProps<ModalContentProps>(
		props,
		modalContentDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<ModalContentProps>>(mergedProps);

	return <div class={tw}>{props.children}</div>;
};
export default ModalContent;
