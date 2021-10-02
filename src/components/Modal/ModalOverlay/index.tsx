import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalOverlayProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalOverlay: Component<ModalOverlayProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalOverlayDefaultProps =
		context.defaultTheme.Components?.ModalOverlay?.defaultProps;

	const modalOverlayThemeProps =
		context.theme?.Components?.ModalOverlay?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...modalOverlayDefaultProps,
		...modalOverlayThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<div
			class={simpleProps}
			style={{ background: "rgba(0, 0, 0, 0.48)" }}
		></div>
	);
};
export default ModalOverlay;
