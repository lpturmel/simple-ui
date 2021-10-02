import { Component, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface DividerProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const Divider: Component<DividerProps> = (props) => {
	const [context] = useContext(SimpleContext);

	const DividerDefaultProps =
		context.defaultTheme.Components?.Divider?.defaultProps;
	const DividerThemeProps = context.theme?.Components?.Divider?.defaultProps;

	const mergedProps = parseDefaultProps(props, {
		...DividerDefaultProps,
		...DividerThemeProps,
	});
	// Add
	const simpleProps = mapPropsToCss(mergedProps, true);

	return (
		<div {...props} class={simpleProps}>
			{props.children}
		</div>
	);
};
