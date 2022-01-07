import { HStack, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout: Component = (props) => {
	return (
		<VStack class="w-full h-screen">
			<Navbar />
			<HStack class="w-full h-full">
				<Sidebar />

				<VStack class="w-full h-full items-start p-4">
					{props.children}
				</VStack>
			</HStack>
		</VStack>
	);
};
export default Layout;
