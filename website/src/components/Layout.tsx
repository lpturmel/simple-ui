import { HStack, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout: Component = (props) => {
	return (
		<VStack w="full" height="full">
			<Navbar />
			<HStack w="full" bg="blue.400" justifyContent="start">
				<Sidebar />
				<VStack height="full" w="full" p={4}>
					{props.children}
				</VStack>
			</HStack>
		</VStack>
	);
};
export default Layout;
