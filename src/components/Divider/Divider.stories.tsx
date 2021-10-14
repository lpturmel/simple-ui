import { SimpleProvider } from "../../context/SimpleContext";
import StoryWrapper from "../../StoryWrapper";
import { Divider } from "./Divider";

export default {
	component: Divider,
	title: "UI/Divider",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Divider />
		</StoryWrapper>
	</SimpleProvider>
);
