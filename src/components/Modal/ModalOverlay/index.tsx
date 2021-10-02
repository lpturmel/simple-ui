import { Component, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalOverlayProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalOverlay: Component<ModalOverlayProps> = (props) => {
	const mergedProps = mergeProps("ModalOverlay", props);

	const simpleProps = mapPropsToCss(mergedProps, true);
	return (
		<div
			class={simpleProps}
			style={{ background: "rgba(0, 0, 0, 0.48)" }}
		></div>
	);
};
