import Button from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

export const Default = () => (
	<Button
		_hover={{
			bg: "yellow.500",
		}}
		_active={{
			bg: "yellow.600",
		}}
		fontWeight="normal"
		bg="yellow.400"
		px={4}
		py={2}
	>
		Button
	</Button>
);
