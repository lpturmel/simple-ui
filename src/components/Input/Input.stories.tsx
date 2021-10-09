import { Input } from "./Input";

export default {
	component: Input,
	title: "UI/Input",
};

export const Default = () => (
	<Input
		placeholder="Regular Input"
		paddingY={2}
		paddingX={4}
		backgroundColor={"gray.300"}
		_hover={{ backgroundColor: "gray.400" }}
	/>
);
