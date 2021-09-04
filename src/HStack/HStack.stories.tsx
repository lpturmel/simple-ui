import Button from "../Button/Button";
import HStack from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack>
		<Button>Button</Button>
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
	</HStack>
);
