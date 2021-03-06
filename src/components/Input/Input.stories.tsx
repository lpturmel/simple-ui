import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import { Input } from "./Input";

export default {
	component: Input,
	title: "UI/Input",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Input placeholder="Outline" />
		</StoryWrapper>
	</SimpleProvider>
);
