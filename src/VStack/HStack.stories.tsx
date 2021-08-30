import Button from "../Button/Button";
import VStack from "./VStack";

export default {
	component: VStack,
	title: "UI/VStack",
};

export const Default = () => (
	<VStack>
		<Button>VStack</Button>
		<Button>VStack</Button>
	</VStack>
);
