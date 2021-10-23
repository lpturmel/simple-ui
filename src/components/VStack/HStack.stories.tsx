import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { Button } from "../Button/Button";
import { VStack } from "./VStack";

export default {
	component: VStack,
	title: "UI/VStack",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<VStack class="space-y-4 w-2/12">
				<Button>VStack Child 1</Button>
				<Button>VStack Child 2</Button>
			</VStack>
		</StoryWrapper>
	</SimpleProvider>
);
