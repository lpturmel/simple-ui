import { SimpleProvider } from "../../context/SimpleContext";
import Button from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

export const Default = () => (
	<SimpleProvider>
		<Button width="1/4" bg="red.500" color="blue.700">
			Button
		</Button>
	</SimpleProvider>
);
