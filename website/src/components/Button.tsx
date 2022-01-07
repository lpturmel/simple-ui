import { Button, VStack } from "simple-ui-solid";
import { Component } from "solid-js";
import Prism from "prismjs";

Prism.highlightAll();

const ButtonComponent: Component = () => {
	const code = `<Button>Button</Button>`;
	return (
		<VStack class="space-y-4 items-start">
			<Button>Button</Button>
			<pre>
				<code class="prism-code language-js">{code}</code>
			</pre>
		</VStack>
	);
};
export default ButtonComponent;
