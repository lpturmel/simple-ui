import { SimpleProvider } from "../../context/SimpleContext";
import StoryWrapper from "../../StoryWrapper";
import { SimpleThemeConfig } from "../../theme";
import { HStack } from "../HStack";
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
				<Button>Button</Button>
			</StoryWrapper>
		</SimpleProvider>
	);
};

export const Outlined = () => {
	return (
		<SimpleProvider theme={theme}>
			<StoryWrapper>
				<Button variant="outlined">Button</Button>
			</StoryWrapper>
		</SimpleProvider>
	);
};
