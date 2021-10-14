import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../../props";
import { mapPropsToCss, mergeProps } from "../../../props/Global";

export interface ModalHeaderProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const ModalHeader: Component<ModalHeaderProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		const mergedProps = mergeProps("ModalHeader", props);
		setSimpleProps(mapPropsToCss(mergedProps, true));
	});
	return (
		<div class={simpleProps()}>
			{props.children}
			<button>X</button>
		</div>
	);
};
