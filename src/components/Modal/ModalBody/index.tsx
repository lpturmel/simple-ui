import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalBody: Component<ModalBodyProps> = (props) => {
	const defaultProps: PropsWithChildren<ModalBodyProps> = {
		zIndex: 50,
	};
	const mergedProps = parseDefaultProps<ModalBodyProps>(props, defaultProps);

	const tw = mapPropsToCss<PropsWithChildren<ModalBodyProps>>(mergedProps);
	return <div class={tw}>{props.children}</div>;
};
export default ModalBody;
