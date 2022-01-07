import { HStack, Input } from "simple-ui-solid";
import { Component } from "solid-js";

const Navbar: Component = (props) => {
	return (
		<HStack class="w-full justify-between py-2 px-4">
			<a href="/"> Simple-ui </a>

			<Input placeholder="Search docs" class="w-64" />
			<p> v0.0.17 </p>
		</HStack>
	);
};
export default Navbar;
