import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const HStackDefaultProps = context.theme.Components?.HStack?.defaultProps;

	const mergedProps = parseDefaultProps(props, HStackDefaultProps!);

	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<div {...props} class={simpleProps}>
			{props.children}
		</div>
	);
};
