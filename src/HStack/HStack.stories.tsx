import Button from "../Button/Button";
import HStack from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack>
		<Button
			_hover={{ bg: "blue.500" }}
			_active={{ bg: "blue.600" }}
			bg={"blue.400"}
			color="black"
			px={4}
			py={2}
		>
			Button
		</Button>
		<Button px={4} py={2}>
			Button
		</Button>
	</HStack>
);
