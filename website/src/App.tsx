import { Component, lazy } from "solid-js";

import { Route, Routes } from "solid-app-router";
import NotFound from "./components/NotFound";
import "prism-themes/themes/prism-nord.css";

const Home = lazy(() => import("./components/Home"));
const ButtonComponent = lazy(() => import("./components/Button"));
const ModalComponent = lazy(() => import("./components/Modal"));

const App: Component = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/docs/button" element={<ButtonComponent />} />
				<Route path="/docs/modal" element={<ModalComponent />} />
				<Route path="/*all" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
