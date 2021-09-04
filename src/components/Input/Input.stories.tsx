import Button from "../Button/Button";
import Input from "./Input";

export default {
	component: Input,
	title: "UI/Input",
};

export const Default = () => (
	<Input
		placeholder="Regular Input"
		py={2}
		px={4}
		bg={"gray.300"}
		_hover={{ bg: "gray.400" }}
		_focus={{ bg: "white" }}
	/>
);
