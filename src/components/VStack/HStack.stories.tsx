import { Button } from "../Button/Button";
import { VStack } from "./VStack";

export default {
	component: VStack,
	title: "UI/VStack",
};

export const Default = () => (
	<VStack w="2/12" class="max-w-2">
		<Button px={4} py={2}>
			VStack Child 1
		</Button>
		<Button px={4} py={2}>
			VStack Child 2
		</Button>
	</VStack>
);
