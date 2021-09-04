import { parseStateProps } from "./states";

export function mapPropsToTw<T>(props: T) {
	// This type annotation is to have the proper types returned from Object.keys(x)
	// By design it returns a string[]
	let classString = "";

	(Object.keys(props) as Array<keyof T>).forEach((prop) => {
		let newPropName: any = prop;

		switch (prop) {
			/**
			 * Sizing
			 */
			case "width":
				newPropName = "w";
				break;

			case "maxWidth":
				newPropName = "max-w";
				break;

			case "minWidth":
				newPropName = "min-w";
				break;

			case "height":
				newPropName = "h";
				break;

			case "maxHeight":
				newPropName = "max-h";
				break;

			case "minHeight":
				newPropName = "min-h";
				break;

			/**
			 * Colors
			 */
			case "color":
				newPropName = "text";
				break;

			case "backgroundColor":
				newPropName = "bg";
				break;

			/**
			 * Font
			 */
			case "fontSize":
				newPropName = "text";
				break;

			case "fontWeight":
				newPropName = "font";
				break;

			/**
			 * Utils
			 */
			case "placeholder":
				break;

			/**
			 * States
			 */
			case "_active":
				console.log("entered active");
				const activeProps = mapPropsToTw<T>(
					(props[prop] as unknown) as T
				);
				newPropName = parseStateProps(activeProps, "active");
				break;

			case "_focus":
				console.log("entered _focus");

				const focusProps = mapPropsToTw<T>(
					(props[prop] as unknown) as T
				);

				newPropName = parseStateProps(focusProps, "focus");
				break;

			case "_hover":
				console.log("entered _hover");

				const hoverProps = mapPropsToTw<T>(
					(props[prop] as unknown) as T
				);

				newPropName = parseStateProps(hoverProps, "hover");
				break;
		}

		classString += `${newPropName}-${props[prop]} `.replace(".", "-");
	});
	return classString;
}

export type TailwindRemValues =
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
