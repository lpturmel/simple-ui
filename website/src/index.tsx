import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router } from "solid-app-router";
import { SimpleProvider } from "simple-ui-solid";

render(
	() => (
		<SimpleProvider>
			<Router>
				<App />
			</Router>
		</SimpleProvider>
	),
	document.getElementById("root")!
);
