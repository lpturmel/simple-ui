import { Component, createSignal, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

interface SelectProps
	extends MainProps<JSX.SelectHTMLAttributes<HTMLSelectElement>> {
	defaultValue: string;
}
const Select: Component<SelectProps> = (props) => {
	const tw = mapPropsToTw<PropsWithChildren<SelectProps>>(props);

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
			} ${tw} transition-colors duration-200 ease-in-out py-2 px-4 bg-gray-100 hover:bg-gray-300 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-semibold rounded-lg text-gray-800`}
			{...props}
		>
			<option value={props.defaultValue}>{props.defaultValue}</option>
			{props.children}
		</select>
	);
};
export default Select;
