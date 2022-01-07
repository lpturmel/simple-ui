import { VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import SidebarItem from "./SidebarItem";

const Sidebar: Component = (props) => {
	return (
		<VStack class="py-4 px-8 h-full w-1/6 max-w-sm overflow-y-auto">
			<SidebarItem path="/docs/button" title="Button" />
			{/* <SidebarItem path="/docs/hstack" title="HStack" />
			<SidebarItem path="/docs/vstack" title="VStack" />
			<SidebarItem path="/docs/input" title="Input" /> */}
			<SidebarItem path="/docs/modal" title="Modal" />
		</VStack>
	);
};
export default Sidebar;
