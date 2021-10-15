import { PropsWithChildren, useContext } from "solid-js";
import MainProps from ".";
import { SimpleContext } from "../context/SimpleContext";
import { SimpleComponentList } from "../theme";
import { parseStateProps } from "./states";

/**
 * Maps the received properties to Simple-UI CSS classes
 * @param props
 * @param isParent
 * @returns
 */
export function mapPropsToCss<ComponentProps>(
	props: ComponentProps,
	isParent: boolean
) {
	let classString = "";

	// This type annotation is to have the proper types returned from Object.keys(x)
	// By design it returns a string[]
	(Object.keys(props) as Array<keyof ComponentProps>).forEach((prop) => {
		if (!reservedProps.includes(prop.toString())) {
			if (typeof props[prop] === "object") {
				const stateProps = mapPropsToCss(props[prop], false);

				classString += parseStateProps(
					stateProps,
					(prop as string).replace("_", "")
				);
			} else {
				classString += `${isParent ? "simple-ui-" : ""}${prop}-${
					props[prop]
				} `.replace(".", "-");
			}
		}
	});

	return classString;
}
/**
 * Merge default, theme and variant props
 * @param props
 * @param defaultProps
 * @returns
 */
export function mergeProps(
	ComponentKey: keyof SimpleComponentList,
	props: PropsWithChildren<MainProps>
) {
	const [context] = useContext(SimpleContext);

	const defaultStyles = context.defaultTheme.defaultProps;
	const currentColorMode = context.colorMode;
	const defaultThemeVariantStyles =
		context.defaultTheme.Components?.[ComponentKey]?.variants?.[
			props.variant!
		];
	const customThemeVariantStyles =
		context.theme?.Components?.[ComponentKey]?.variants?.[props.variant!];

	const componentDefaultProps = {
		...context.defaultTheme.Components?.[ComponentKey]?.defaultProps,
		...(currentColorMode === "light"
			? context.defaultTheme?.Components?.[ComponentKey]?.light
			: context.defaultTheme?.Components?.[ComponentKey]?.dark),
		...defaultThemeVariantStyles,
	};

	const componentThemeProps = {
		...context.theme?.Components?.[ComponentKey]?.defaultProps,
		...(currentColorMode === "light"
			? context.theme?.Components?.[ComponentKey]?.light
			: context.theme?.Components?.[ComponentKey]?.dark),
		...customThemeVariantStyles,
	};

	const parsedProps = {
		// Styles that apply to all components
		...defaultStyles,
		// Component specific defaults
		...componentDefaultProps,
		// Component theming
		...componentThemeProps,
		// Inline props
		...props,
	};

	return parsedProps;
}

const reservedProps = ["children", "controls", "isOpen", "onClick", "style"];
/**
 * Describe the basic rem values
 */
export type SimpleRemValues =
	| 0
	| 0.5
	| 1
	| 1.5
	| 2
	| 2.5
	| 3
	| 3.5
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 14
	| 16
	| 20
	| 24
	| 28
	| 32
	| 36
	| 40
	| 44
	| 48
	| 52
	| 56
	| 60
	| 64
	| 72
	| 80
	| 96;

/**
 * Describe the basic color values
 */
export type SimpleColorValues =
	| "black"
	| "white"
	| "blackalpha"
	| "blackalpha.100"
	| "blackalpha.200"
	| "blackalpha.300"
	| "blackalpha.400"
	| "blackalpha.500"
	| "blackalpha.600"
	| "blackalpha.700"
	| "blackalpha.800"
	| "blackalpha.900"
	| "whitealpha.100"
	| "whitealpha.200"
	| "whitealpha.300"
	| "whitealpha.400"
	| "whitealpha.500"
	| "whitealpha.600"
	| "whitealpha.700"
	| "whitealpha.800"
	| "whitealpha.900"
	| "red.100"
	| "red.200"
	| "red.300"
	| "red.400"
	| "red.500"
	| "red.600"
	| "red.700"
	| "red.800"
	| "red.900"
	| "gray.100"
	| "gray.200"
	| "gray.300"
	| "gray.400"
	| "gray.500"
	| "gray.600"
	| "gray.700"
	| "gray.800"
	| "gray.900"
	| "yellow.100"
	| "yellow.200"
	| "yellow.300"
	| "yellow.400"
	| "yellow.500"
	| "yellow.600"
	| "yellow.700"
	| "yellow.800"
	| "yellow.900"
	| "green.100"
	| "green.200"
	| "green.300"
	| "green.400"
	| "green.500"
	| "green.600"
	| "green.700"
	| "green.800"
	| "green.900"
	| "blue.100"
	| "blue.200"
	| "blue.300"
	| "blue.400"
	| "blue.500"
	| "blue.600"
	| "blue.700"
	| "blue.800"
	| "blue.900"
	| "indigo.100"
	| "indigo.200"
	| "indigo.300"
	| "indigo.400"
	| "indigo.500"
	| "indigo.600"
	| "indigo.700"
	| "indigo.800"
	| "indigo.900"
	| "purple.100"
	| "purple.200"
	| "purple.300"
	| "purple.400"
	| "purple.500"
	| "purple.600"
	| "purple.700"
	| "purple.800"
	| "purple.900"
	| "pink.100"
	| "pink.200"
	| "pink.300"
	| "pink.400"
	| "pink.500"
	| "pink.600"
	| "pink.700"
	| "pink.800"
	| "pink.900";
