import { PropsWithChildren } from "solid-js";
import MainProps from ".";
import { parseStateProps } from "./states";

/**
 * Maps the received properties to Simple-UI CSS classes
 * @param props
 * @returns
 */
export function mapPropsToCss<T>(props: T) {
	// This type annotation is to have the proper types returned from Object.keys(x)
	// By design it returns a string[]
	let classString = "";

	(Object.keys(props) as Array<keyof T>).forEach((prop) => {
		if (typeof props[prop] === "object") {
			const stateProps = mapPropsToCss(props[prop]);

			classString += parseStateProps(
				stateProps,
				(prop as string).replace("_", "")
			);
		} else {
			if (!reservedProps.includes(prop.toString())) {
				classString += `${prop}-${props[prop]} `.replace(".", "-");
			}
		}
	});
	return classString;
}
/**
 * Add received props to the configured default props
 * @param props
 * @param defaultProps
 * @returns
 */
export function parseDefaultProps<T>(
	props: PropsWithChildren<T>,
	defaultProps: MainProps
) {
	const parsedProps: MainProps = { ...defaultProps };

	(Object.keys(props) as Array<keyof PropsWithChildren<T>>).forEach(
		(prop) => ((parsedProps as any)[prop] = props[prop])
	);

	return parsedProps;
}

const reservedProps = ["children", "controls", "isOpen", "onClick"];
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
