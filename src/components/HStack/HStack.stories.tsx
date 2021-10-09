import { Button } from "../Button/Button";
import { HStack } from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack padding={4} spacingX={4}>
		<Button>Button</Button>
		<Button
			_hover={{ backgroundColor: "blue.400" }}
			paddingX={4}
			paddingY={2}
			style={{ background: "gay" }}
		>
			Button
		</Button>
	</HStack>
);
