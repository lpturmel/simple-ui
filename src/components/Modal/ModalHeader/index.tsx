import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";
import { Button } from "../../Button";
import { ModalOverlayProps } from "../ModalOverlay";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalHeaderDefaultProps = context.theme.Components?.ModalHeader;

	const mergedProps = parseDefaultProps<ModalHeaderProps>(
		props,
		modalHeaderDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<ModalHeaderProps>>(mergedProps);
	return (
		<div class={tw}>
			{props.children}
			<button>X</button>
		</div>
	);
};
export default ModalHeader;
