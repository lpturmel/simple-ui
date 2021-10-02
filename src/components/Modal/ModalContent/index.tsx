import { Component, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalContentProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalContent: Component<ModalContentProps> = (props) => {
	const mergedProps = mergeProps("ModalContent", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return <div class={simpleProps}>{props.children}</div>;
};
