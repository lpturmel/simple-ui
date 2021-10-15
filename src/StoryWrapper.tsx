import { Component } from "solid-js";
import { Button, useColorMode } from ".";
import { HStack } from ".";
const StoryWrapper: Component = (props) => {
	const [colorMode, toggleColorMode] = useColorMode();

	return (
		<HStack
			position="relative"
			padding={16}
			spacingX={8}
			width="full"
			height="screen"
			alignItems="start"
		>
			<Button
				paddingTop={0}
				paddingBottom={0}
				paddingRight={0}
				paddingLeft={0}
				backgroundColor="transparent"
				_hover={{
					backgroundColor: "gray.600",
					backgroundOpacity: 20,
				}}
				_active={{
					backgroundColor: "gray.700",
				}}
				width={10}
				height={10}
				onClick={() => toggleColorMode()}
				position="absolute"
				top={1}
				right={1}
			>
				{colorMode() === "dark" ? "🔅" : "🌑"}
			</Button>
			{props.children}
		</HStack>
	);
};
export default StoryWrapper;
