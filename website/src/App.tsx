import { Component, lazy } from "solid-js";

import { Route, Routes } from "solid-app-router";

const Home = lazy(() => import("./components/Home"));
const ButtonComponent = lazy(() => import("./components/Button"));

const App: Component = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/docs/button"
					element={<ButtonComponent />}
				></Route>
			</Routes>
		</>
	);
};

export default App;
