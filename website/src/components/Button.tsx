import { Button, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Layout from "./Layout";
import Prism from "prismjs";

Prism.highlightAll();

const ButtonComponent: Component = (props) => {
	const code = `<Button>Button</Button>`;
	return (
		<VStack spacingY={4} alignItems="start">
			<Button>Button</Button>
			<pre>
				<code class="prism-code language-js">{code}</code>
			</pre>
		</VStack>
	);
};
export default ButtonComponent;
