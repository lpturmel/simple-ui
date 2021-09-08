import { Component, createContext } from "solid-js";
import { createStore } from "solid-js/store";
import "../index.css";
import "../props/sizing/width/index.css";
import "../props/sizing/height/index.css";
import "../props/background/colors/index.css";
import "../props/text/colors/index.css";
import "../props/text/fontSize/index.css";
import "../props/text/fontWeight/index.css";
import "../props/borders/borderRadius/index.css";
import "../props/spacing/margin/index.css";
import "../props/spacing/padding/index.css";
import "../props/spacing/spaceBetween/index.css";
import "../props/layout/display/index.css";
import "../props/layout/position/index.css";
import "../props/flex/flex/index.css";
import "../props/flex/flexDirection/index.css";
import "../props/flex/flexGrow/index.css";
import "../props/flex/flexShrink/index.css";
import "../props/flex/flexWrap/index.css";
import "../props/flex/gap/index.css";
import "../props/flex/justifyContent/index.css";
import "../props/grid/gridTemplateColumns/index.css";
import "../props/grid/gridTemplateRows/index.css";
import "../props/grid/gridColSpan/index.css";
import "../props/grid/gridRowSpan/index.css";
import "../props/grid/gridFlow/index.css";
import "../props/grid/autoColumns/index.css";
import "../props/grid/autoRows/index.css";

export const SimpleContext = createContext();

export const SimpleProvider: Component = (props) => {
	const [state, setState] = createStore<{
		portal: null | HTMLDivElement;
	}>({
		portal: null,
	});

	return (
		<SimpleContext.Provider value={[state, setState]}>
			<div>
				<div
					ref={(el) => setState("portal", el)}
					id="simple-ui-portal"
				/>
				{props.children}
			</div>
		</SimpleContext.Provider>
	);
};
