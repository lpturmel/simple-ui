import { Component, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalBodyProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalBody: Component<ModalBodyProps> = (props) => {
	const mergedProps = mergeProps("ModalBody", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return <div class={simpleProps}>{props.children}</div>;
};
