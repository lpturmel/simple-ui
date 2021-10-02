import { Component, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const mergedProps = mergeProps("ModalHeader", props);

	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<div class={simpleProps}>
			{props.children}
			<button>X</button>
		</div>
	);
};
