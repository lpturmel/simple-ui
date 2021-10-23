import { render } from "solid-js/web";
import "../src/index.css";
import "tailwindcss/tailwind.css";

let disposeStory;

export const decorators = [
	(Story) => {
		if (disposeStory) {
			disposeStory();
		}
		const root = document.getElementById("root");
		const solid = document.createElement("div");
		solid.setAttribute("id", "solid-root");
		root.appendChild(solid);
		disposeStory = render(Story, solid);
		return solid;
	},
];
