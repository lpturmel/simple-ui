import { useContext } from "solid-js"; import MainProps from ".";
import { SimpleContext } from "../context/SimpleContext";
import { ComponentDefinition, SimpleComponentList } from "../theme";

/**
 * Gather the used classes depending on the colormode
 * @param config
 * @param colorMode
 * @returns
 */
export function extractClasses(
	config: ComponentDefinition,
	colorMode: "light" | "dark"
): string {
	let classString = "";
	if (!config) return classString;

	if (typeof config.class === "string") {
		classString += `${config.class} `;
	}

	if (colorMode === "light" && config.light) {
		classString += `${config.light} `;
	}
	if (colorMode === "dark" && config.dark) {
		classString += `${config.dark} `;
	}

	return classString + " ";
}
/**
 * Merge default, theme and variant classes
 * @param props
 * @param defaultProps
 * @returns
 */
export function mergeClasses(
	ComponentKey: keyof SimpleComponentList,
	props: MainProps<ComponentDefinition>
) {
	let parsedClasses = "";
	const [context] = useContext(SimpleContext);
	const currentColorMode = context.colorMode;

	// Get the default theme default classes
	parsedClasses += extractClasses(
		context.defaultTheme.defaultProps!,
		currentColorMode
	);
	// Get the default theme component default classes
	parsedClasses += extractClasses(
		context.defaultTheme?.Components?.[ComponentKey]?.default!,
		currentColorMode
	);
	// Get the default theme component variant classes
	parsedClasses += extractClasses(
		context.defaultTheme.Components?.[ComponentKey]?.variants?.[
			props.variant!
		]!,
		currentColorMode
	);

	// Get the custom theme default classes
	parsedClasses += extractClasses(
		context.theme?.defaultProps!,
		currentColorMode
	);

	// Get the custom theme component default classes
	parsedClasses += extractClasses(
		context.theme?.Components?.[ComponentKey]?.default!,
		currentColorMode
	);

	// Get the custom theme component variant classes
	parsedClasses += extractClasses(
		context.theme?.Components?.[ComponentKey]?.variants?.[props.variant!]!,
		currentColorMode
	);

	if (props.class) {
		parsedClasses += props.class;
	}

	return parsedClasses;
}
