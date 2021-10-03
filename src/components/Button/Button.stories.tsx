import { SimpleProvider } from "../../context/SimpleContext";
import { SimpleThemeConfig } from "../../theme";
import { Button } from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

const theme: SimpleThemeConfig = {};
export const Default = () => (
	<SimpleProvider theme={theme}>
		<Button>Button</Button>
	</SimpleProvider>
);
