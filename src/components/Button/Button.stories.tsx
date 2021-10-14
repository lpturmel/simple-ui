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
				<Button>Button</Button>
			</StoryWrapper>
		</SimpleProvider>
	);
};
