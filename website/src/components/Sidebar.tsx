import { VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import SidebarItem from "./SidebarItem";

const Sidebar: Component = (props) => {
	return (
		<VStack p={4} height="screen" width="1/4" maxWidth="sm" bg="red.500">
			<SidebarItem path="/docs/button" title="Button" />
		</VStack>
	);
};
export default Sidebar;
