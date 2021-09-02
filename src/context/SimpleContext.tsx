import { Component, createContext } from "solid-js";
import { createStore } from "solid-js/store";
export const SimpleContext = createContext();

export const SimpleProvider: Component = (props) => {
	const [state, setState] = createStore<{
		portal: null | HTMLDivElement;
	}>({
		portal: null,
	});

	return (
		<SimpleContext.Provider value={[state, setState]}>
			<div ref={(el) => setState("portal", el)} id="simple-ui-portal" />
			{props.children}
		</SimpleContext.Provider>
	);
};
