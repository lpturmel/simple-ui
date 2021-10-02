import { SimpleProvider } from "../../context/SimpleContext";
import { Divider } from "./Divider";

export default {
	component: Divider,
	title: "UI/Divider",
};

export const Default = () => (
	<SimpleProvider>
		<Divider />
	</SimpleProvider>
);
