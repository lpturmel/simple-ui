import { Component, JSX } from "solid-js";
import MainProps from "../../props";
import { mapPropsToCss, mergeProps } from "../../props/Global";

export interface DividerProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const Divider: Component<DividerProps> = (props) => {
	const mergedProps = mergeProps("Divider", props);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<>
			<hr class={simpleProps} />
		</>
	);
};
