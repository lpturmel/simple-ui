import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalHeaderDefaultProps =
		context.theme.Components?.ModalHeader?.defaultProps;

	const mergedProps = parseDefaultProps(props, modalHeaderDefaultProps!);
	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<div class={simpleProps}>
			{props.children}
			<button>X</button>
		</div>
	);
};
export default ModalHeader;
