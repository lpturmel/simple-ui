import { Button } from "../Button/Button";
import { HStack } from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack
		p={4}
		spacingX={4}
		bg="white"
		borderWidth={4}
		borderStyle="solid"
		borderRadius="md"
		borderColor="yellow.800"
	>
		<Button>Button</Button>
		<Button _hover={{ backgroundColor: "blue.400" }} px={4} py={2}>
			Button
		</Button>
	</HStack>
);
