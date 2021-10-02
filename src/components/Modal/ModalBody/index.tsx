import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalBody: Component<ModalBodyProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalBodyDefaultProps =
		context.defaultTheme.Components?.ModalBody?.defaultProps;

	const modalBodyThemeProps =
		context.theme?.Components?.ModalBody?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...modalBodyDefaultProps,
		...modalBodyThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);

	return <div class={simpleProps}>{props.children}</div>;
};
export default ModalBody;
