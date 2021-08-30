import { Component } from "solid-js";
import { counter } from "../store";

interface HStackProps {}
const HStack: Component<HStackProps> = (props) => {
	return (
		<div {...props} class="flex flex-row space-x-2">
			{counter()}
			{props.children}
		</div>
	);
};
export default HStack;
