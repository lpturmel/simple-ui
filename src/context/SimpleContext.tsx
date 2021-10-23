import { Component, createContext } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import "../index.css";

import { DefaultTheme, SimpleThemeConfig } from "../theme";

interface IProviderStore {
	theme: SimpleThemeConfig | null;
	defaultTheme: SimpleThemeConfig;
	colorMode: "dark" | "light";
}

const [state, setState] = createStore<IProviderStore>({
	theme: null,
	defaultTheme: DefaultTheme,
	colorMode: "dark",
});
export const SimpleContext = createContext<
	[Store<IProviderStore>, SetStoreFunction<IProviderStore>]
>([state, setState]);

interface SimpleProviderProps {
	theme?: SimpleThemeConfig;
}
export const SimpleProvider: Component<SimpleProviderProps> = (props) => {
	if (props.theme) {
		setState("theme", () => props.theme);
		setState("colorMode", () =>
			props.theme?.defaultColorMode
				? props.theme?.defaultColorMode
				: "dark"
		);
	}
	return (
		<SimpleContext.Provider value={[state, setState]}>
			<div id="simple-ui-portal" />
			{props.children}
		</SimpleContext.Provider>
	);
};
