import { Button, VStack } from "simple-ui-solid";
import { Link } from "solid-app-router";
import { Component } from "solid-js";
import Navbar from "./Navbar";

const NotFound: Component = (props) => {
	return (
		<VStack>
			<Navbar />
			<VStack>
				<p>We're not cool enough to provide this page yet :(</p>
				<Link href="/">
					<Button>Go home!</Button>
				</Link>
			</VStack>
		</VStack>
	);
};
export default NotFound;
