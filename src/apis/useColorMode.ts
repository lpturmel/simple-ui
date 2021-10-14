import { Accessor, createEffect, createSignal, useContext } from "solid-js";
import { SimpleContext } from "../context/SimpleContext";

/**
 * Api to control the internal state of the color mode and toggle it if necessary
 *
 */
export const useColorMode = (): [
	get: Accessor<"dark" | "light">,
	set: (colorMode?: "dark" | "light") => void
] => {
	const [context, setContext] = useContext(SimpleContext);

	const [controlledValue, setControlledValue] = createSignal(
		context.colorMode
	);

	createEffect(() => setControlledValue(context.colorMode));
	/**
	 * Toggle the color mode if a value isn't passed or
	 * change the color mode to the specified value
	 *
	 */
	function toggleColorMode(colorMode?: "dark" | "light") {
		if (colorMode) {
			setContext("colorMode", () => colorMode);
		} else {
			setContext("colorMode", (colorModeCurrentValue) =>
				colorModeCurrentValue === "dark" ? "light" : "dark"
			);
		}
	}

	return [controlledValue, toggleColorMode];
};
