import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { Text } from "./Text";

export default {
	component: Text,
	title: "UI/Text",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Text>Some text</Text>
		</StoryWrapper>
	</SimpleProvider>
);
