import { Component } from "solid-js";

interface VStackProps {}
const VStack: Component<VStackProps> = (props) => {
	return (
		<div {...props} class="flex flex-col space-y-2">
			{props.children}
		</div>
	);
};
export default VStack;
