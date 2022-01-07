import { Component, lazy } from "solid-js";

import { Route, Routes } from "solid-app-router";
import NotFound from "./components/NotFound";
import "prism-themes/themes/prism-nord.css";
import UnderConstruction from "./components/UnderConstruction";
import { useColorMode } from "simple-ui-solid";

const Home = lazy(() => import("./components/Home"));
const ButtonComponent = lazy(() => import("./components/Button"));
const ModalComponent = lazy(() => import("./components/Modal"));
const Layout = lazy(() => import("./components/Layout"));

const App: Component = () => {
	const [colormode] = useColorMode();
	console.log(colormode());
	return (
		// <Routes>
		// 	<Route path="/" element={<Home />}></Route>
		// 	<Route
		// 		path="/docs/button"
		// 		element={
		// 			<Layout>
		// 				<ButtonComponent />{" "}
		// 			</Layout>
		// 		}
		// 	/>
		// 	<Route
		// 		path="/docs/modal"
		// 		element={
		// 			<Layout>
		// 				<ModalComponent />{" "}
		// 			</Layout>
		// 		}
		// 	/>
		// 	<Route path="/*all" element={<NotFound />} />
		// </Routes>
		<UnderConstruction />
	);
};

export default App;
