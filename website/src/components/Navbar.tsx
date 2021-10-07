import { HStack, Input } from "simple-ui-solid";
import { Component } from "solid-js";

const Navbar: Component = (props) => {
	return (
		<HStack w="full" justifyContent="between" py={2} px={4}>
			<a href="/"> Simple-ui </a>

			<Input bg="gray.100" w={64} p={2} placeholder="Search docs" />
			<p> v0.0.17 </p>
		</HStack>
	);
};
export default Navbar;
