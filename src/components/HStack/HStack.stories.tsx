import { Button } from "../Button/Button";
import { HStack } from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack spacingX={2}>
		<Button>Button</Button>
		<Button bg={"blue.400"} px={4} py={2}>
			Button
		</Button>
	</HStack>
);
