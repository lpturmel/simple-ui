import { Button, HStack, Link, Text, VStack } from "simple-ui-solid";
import { Component, createEffect, createSignal } from "solid-js";

const UnderConstruction: Component = (props) => {
	const [barWidth, setBarWidth] = createSignal("0%");

	createEffect(() => setTimeout(() => setBarWidth("10%"), 800));
	return (
		<VStack
			style={{ height: "75vh" }}
			justifyContent="center"
			spacingY={16}
		>
			<VStack gap={2} fontWeight="bold">
				<Text fontSize="4xl" margin={0}>
					{" "}
					UNDER{" "}
				</Text>
				<Text fontSize="4xl" margin={0}>
					{" "}
					CONSTRUCTION{" "}
				</Text>
			</VStack>
			<VStack width="full" spacingY={8}>
				<Link
					href="https://github.com/lpturmel/simple-ui"
					target="_blank"
				>
					<Button
						backgroundColor="blue.500"
						_hover={{ backgroundColor: "blue.600" }}
						_active={{ backgroundColor: "blue.700" }}
					>
						{" "}
						See Progress on GitHub
					</Button>
				</Link>
				<HStack
					position="relative"
					height={3}
					width={80}
					// style={{ height: "0.75rem" }}
					backgroundColor="gray.100"
					borderRadius="sm"
				>
					<HStack
						transitionTiming="ease-linear"
						transition="all"
						transitionDuration={500}
						style={{ width: barWidth() }}
						height="full"
						backgroundColor="blue.200"
						borderRadius="sm"
					/>
					<HStack
						fontSize="sm"
						fontWeight="semibold"
						position="absolute"
						left={0}
						top={4}
					>
						0%
					</HStack>
					<HStack
						fontSize="sm"
						fontWeight="semibold"
						position="absolute"
						right={0}
						top={4}
					>
						100%
					</HStack>
				</HStack>
			</VStack>
		</VStack>
	);
};
export default UnderConstruction;
