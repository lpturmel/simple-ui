import { SimpleProvider } from "../../context/SimpleContext";
import { Button } from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

export const Default = () => (
	<SimpleProvider>
		<Button
			_hover={{ bg: "red.700" }}
			_active={{ bg: "red.900" }}
			bg="red.600"
		>
			Button
		</Button>
	</SimpleProvider>
);
