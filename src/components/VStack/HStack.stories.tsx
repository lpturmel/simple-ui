import { Button } from "../Button/Button";
import { VStack } from "./VStack";

export default {
	component: VStack,
	title: "UI/VStack",
};

export const Default = () => (
	<VStack width="2/12" class="max-w-2">
		<Button paddingX={4} paddingY={2}>
			VStack Child 1
		</Button>
		<Button paddingX={4} paddingY={2}>
			VStack Child 2
		</Button>
	</VStack>
);
