import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../../context/SimpleContext";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalContent: Component<ModalContentProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const modalContentDefaultProps =
		context.defaultTheme.Components?.ModalContent?.defaultProps;
	const modalContentThemeProps =
		context.theme?.Components?.ModalContent?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...modalContentDefaultProps,
		...modalContentThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);

	return <div class={simpleProps}>{props.children}</div>;
};
