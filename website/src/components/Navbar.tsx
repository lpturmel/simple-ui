import { HStack, Input } from "simple-ui-solid";
import { Component } from "solid-js";

const Navbar: Component = (props) => {
	return (
		<HStack width="full" justifyContent="between" paddingY={2} paddingX={4}>
			<a href="/"> Simple-ui </a>

			<Input width={64} placeholder="Search docs" />
			<p> v0.0.17 </p>
		</HStack>
	);
};
export default Navbar;
