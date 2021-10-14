import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { VStack } from "../VStack";
import { Input } from "./Input";

export default {
	component: Input,
	title: "UI/Input",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<VStack height={"full"} backgroundColor="white" padding={4}>
				<Input placeholder="Outline" />
			</VStack>
		</StoryWrapper>
	</SimpleProvider>
);
