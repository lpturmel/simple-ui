import { Component, createEffect, createSignal, JSX } from "solid-js";
import MainProps from "../../props";
import { mergeClasses } from "../../props/global";

export interface DividerProps
	extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

export const Divider: Component<DividerProps> = (props) => {
	const [simpleProps, setSimpleProps] = createSignal<string>("");

	createEffect(() => {
		setSimpleProps(mergeClasses("Divider", props));
	});
	return (
		<>
			<hr class={simpleProps()} />
		</>
	);
};
