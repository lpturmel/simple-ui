import Select from "./Select";

export default {
	component: Select,
	title: "UI/Select",
};

export const Default = () => (
	<Select defaultValue="Pick an option">
		<option>Test</option>
	</Select>
);
