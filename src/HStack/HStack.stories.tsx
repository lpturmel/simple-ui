import Button from "../Button/Button";
import HStack from "./HStack";

export default {
	component: HStack,
	title: "UI/HStack",
};

export const Default = () => (
	<HStack>
		<Button>Button</Button>
		<Button>Button</Button>
	</HStack>
);
