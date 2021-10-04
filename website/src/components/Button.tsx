import { Button, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Layout from "./Layout";
import Prism from "prismjs";

Prism.highlightAll();

const ButtonComponent: Component = (props) => {
	const code = `
        <Button>Button</Button>
    `;
	return (
		<Layout>
			<VStack spacingY={4} alignItems="start">
				<Button>Button</Button>

				<code class="prism-code language-js">{code}</code>
			</VStack>
		</Layout>
	);
};
export default ButtonComponent;
