import { VStack, Button } from "simple-ui-solid";
import { Link } from "solid-app-router";
import { Component } from "solid-js";
import Navbar from "./Navbar";

const Home: Component = (props) => {
	return (
		<VStack height="screen">
			<Navbar />
			<p>The component library meant for Solid Development</p>
			<Link href="docs/button">
				<Button>Get Started!</Button>
			</Link>
		</VStack>
	);
};
export default Home;
