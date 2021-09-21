import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../../props";
import { parseDefaultProps, mapPropsToCss } from "../../../props/Global";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const defaultProps: PropsWithChildren<ModalHeaderProps> = {
		display: "flex",
		flexDirection: "row",
		justifyContent: "between",
		height: "screen",
		width: "full",
		p: 2,
	};
	const mergedProps = parseDefaultProps<ModalHeaderProps>(
		props,
		defaultProps
	);

	const tw = mapPropsToCss<PropsWithChildren<ModalHeaderProps>>(mergedProps);
	return (
		<div class={tw}>
			{props.children}
			<p>X</p>
		</div>
	);
};
export default ModalHeader;
