import { Component } from "solid-js";
import { Button, useColorMode } from ".";
import { HStack } from "./components/HStack";
const StoryWrapper: Component = (props) => {
	const [colorMode, toggleColorMode] = useColorMode();

	return (
		<HStack class="relative p-8 space-x-8 w-full h-screen items-start">
			<Button class="bg-transparent w-10 h-10 absolute top-1 right-1 hover:bg-gray-600 hover:bg-opacity-20 active:bg-gray-700">
				{colorMode() === "dark" ? "🔅" : "🌑"}
			</Button>
			{props.children}
		</HStack>
	);
};
export default StoryWrapper;
