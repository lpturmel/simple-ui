import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface HStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const HStack: Component<HStackProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const HStackDefaultProps = context.theme.Components?.HStack;

	const mergedProps = parseDefaultProps<HStackProps>(
		props,
		HStackDefaultProps!
	);

	const simpleProps = mapPropsToCss<PropsWithChildren<HStackProps>>(
		mergedProps
	);

	return (
		<div {...props} class={simpleProps}>
			{props.children}
		</div>
	);
};
