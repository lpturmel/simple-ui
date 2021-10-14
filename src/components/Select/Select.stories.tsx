import { SimpleProvider } from "../..";
import StoryWrapper from "../../StoryWrapper";
import Select from "./Select";

export default {
	component: Select,
	title: "UI/Select",
};

export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Select defaultValue="Pick an option">
				<option>Test</option>
			</Select>
		</StoryWrapper>
	</SimpleProvider>
);
