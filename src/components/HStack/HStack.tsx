import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../../props";
import { mapPropsToTw } from "../../props/Global";

interface HStackProps extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}

const HStack: Component<HStackProps> = (props) => {
	console.log(props);
	const startTime = performance.now();
	const tw = mapPropsToTw<PropsWithChildren<HStackProps>>(props);
	const endTime = performance.now();

	console.log("HStack took: ", endTime - startTime);
	return (
		<div {...props} class={`${tw} w-4 flex flex-row space-x-2`}>
			{props.children}
		</div>
	);
};
export default HStack;
