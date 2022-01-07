import { render } from "solid-js/web";
import App from "./App";
import { Router } from "solid-app-router";
import { SimpleProvider } from "simple-ui-solid";
import "./index.css";
import "simple-ui-solid/dist/index.css";
import { theme } from "./theme";

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
