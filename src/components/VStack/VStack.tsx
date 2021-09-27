import { Component, JSX, PropsWithChildren, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface VStackProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
export const VStack: Component<VStackProps> = (props) => {
	const [context] = useContext(SimpleContext);
	const VStackDefaultProps = context.theme.Components?.VStack;

	const mergedProps = parseDefaultProps<VStackProps>(
		props,
		VStackDefaultProps!
	);
	const tw = mapPropsToCss<PropsWithChildren<VStackProps>>(mergedProps);
	return (
		<div {...props} class={tw}>
			{props.children}
		</div>
	);
};
