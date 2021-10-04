import { HStack, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout: Component = (props) => {
	return (
		<VStack w="full" height="screen">
			<Navbar />
			<HStack height="full" w="full">
				<Sidebar />

				<VStack height="full" w="full" alignItems="start" p={4}>
					{props.children}
				</VStack>
			</HStack>
		</VStack>
	);
};
export default Layout;
