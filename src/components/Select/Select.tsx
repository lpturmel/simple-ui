import { Component, createSignal, JSX, useContext } from "solid-js";
import { SimpleContext } from "../../context/SimpleContext";
import MainProps from "../../props";
import { mapPropsToCss, parseDefaultProps } from "../../props/Global";

export interface SelectProps
	extends MainProps<JSX.SelectHTMLAttributes<HTMLSelectElement>> {
	defaultValue: string;
}
const Select: Component<SelectProps> = (props) => {
	const [context] = useContext(SimpleContext);
	const selectDefaultProps = context.defaultTheme.Components?.Select
		?.defaultProps!;
	const selectThemeProps = context.theme?.Components?.Select?.defaultProps!;

	const mergedProps = parseDefaultProps(props, {
		...selectDefaultProps,
		...selectThemeProps,
	});
	const simpleProps = mapPropsToCss(mergedProps, true);

	const [valid, setValid] = createSignal(true);

	const _handleBlur = (
		e: Event & {
			currentTarget: HTMLSelectElement;
			target: Element;
		}
	) => {
		setValid(true);
		if (props.defaultValue === e.currentTarget.value) {
			setValid(false);
		}
	};
	return (
		<select
			onBlur={_handleBlur}
			class={`${
				valid() ? "" : "border-red-500"
			} ${simpleProps} transition-colors duration-200 ease-in-out py-2 px-4 bg-gray-100 hover:bg-gray-300 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-semibold rounded-lg text-gray-800`}
			{...props}
		>
			<option value={props.defaultValue}>{props.defaultValue}</option>
			{props.children}
		</select>
	);
};
export default Select;
