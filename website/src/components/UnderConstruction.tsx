import {
	Button,
	HStack,
	Link,
	useColorMode,
	VStack,
	Text,
} from "simple-ui-solid";
import { Component, createEffect, createSignal } from "solid-js";

const UnderConstruction: Component = (props) => {
	const [colorMode, setColorMode] = useColorMode();
	const [barWidth, setBarWidth] = createSignal("0%");

	createEffect(() => setTimeout(() => setBarWidth("60%"), 800));
	return (
		<VStack class="p-60 space-y-16 h-screen">
			<Button
				onClick={() =>
					setColorMode(colorMode() === "light" ? "dark" : "light")
				}
			>
				{colorMode()}
			</Button>
			<VStack class="font-bold space-y-2">
				<Text class="text-4xl m-0"> UNDER </Text>
				<Text class="text-4xl m-0"> CONSTRUCTION </Text>
			</VStack>
			<VStack class="w-full space-y-8">
				<Link
					href="https://github.com/lpturmel/simple-ui"
					target="_blank"
				>
					<Button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-lg">
						See Progress on GitHub
					</Button>
				</Link>
				<HStack class="relative h-3 w-80 bg-gray-100 rounded-sm">
					<HStack
						style={{ width: barWidth() }}
						class="ease-linear transition-all duration-500 h-full bg-blue-300 rounded-sm"
					/>
					<HStack class="text-sm font-semibold absolute left-0 top-4 ">
						<Text>0%</Text>
					</HStack>
					<HStack class="text-sm font-semibold absolute right-0 top-4">
						<Text>100%</Text>
					</HStack>
				</HStack>
			</VStack>
		</VStack>
	);
};
export default UnderConstruction;
