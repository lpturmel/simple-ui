import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { Button } from "../Button/Button";
import { HStack } from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<HStack class="p-4 space-x-8">
				<Button color="white">Button</Button>
				<Button color="white">Button</Button>
			</HStack>
		</StoryWrapper>
	</SimpleProvider>
);
