import { Component } from "solid-js";

interface HStackProps {}
const HStack: Component<HStackProps> = (props) => {
	return (
		<div {...props} class="flex flex-row space-x-2">
			{props.children}
		</div>
	);
};
export default HStack;
