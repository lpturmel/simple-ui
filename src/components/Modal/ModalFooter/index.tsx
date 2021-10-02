import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalFooterProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalFooter: Component<ModalFooterProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalFooterDefaultProps =
		context.defaultTheme.Components?.ModalFooter?.defaultProps;
	const modalFooterThemeProps =
		context.theme?.Components?.ModalFooter?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...modalFooterDefaultProps,
		...modalFooterThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);

	return <div class={simpleProps}>{props.children}</div>;
};
