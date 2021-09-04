import Button from "./Button";

export default {
	component: Button,
	title: "UI/Button",
};

export const Default = () => (
	<Button
		_hover={{
			bg: "blue.500",
			fontSize: "8xl",
			fontWeight: "bold",
			color: "red.600",
		}}
		_active={{
			bg: "blue.600",
			fontSize: "xs",
			fontWeight: "thin",
			color: "red.800",
		}}
		bg={"blue.400"}
		color="black"
		px={4}
		py={2}
	>
		Button
	</Button>
);
