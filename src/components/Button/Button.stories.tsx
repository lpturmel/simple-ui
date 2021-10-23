import { SimpleProvider } from "../../context/SimpleContext";
import StoryWrapper from "../../StoryWrapper";
import { SimpleThemeConfig } from "../../theme";
import { Button } from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

const theme: SimpleThemeConfig = {};

export const Default = () => {
	return (
		<SimpleProvider theme={theme}>
			<StoryWrapper>
				<Button class="text-yellow-300">Button</Button>
			</StoryWrapper>
		</SimpleProvider>
	);
};

export const Outlined = () => {
	return (
		<SimpleProvider theme={theme}>
			<Button variant="outlined">Button</Button>
		</SimpleProvider>
	);
};
