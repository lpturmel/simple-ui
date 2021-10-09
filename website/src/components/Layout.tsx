import { HStack, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout: Component = (props) => {
	return (
		<VStack width="full" height="screen">
			<Navbar />
			<HStack height="full" width="full">
				<Sidebar />

				<VStack
					height="full"
					width="full"
					alignItems="start"
					padding={4}
				>
					{props.children}
				</VStack>
			</HStack>
		</VStack>
	);
};
export default Layout;
