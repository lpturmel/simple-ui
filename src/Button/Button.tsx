import { Component } from "solid-js";

interface ButtonProps {}
const Button: Component<ButtonProps> = (props) => {
	return (
		<button
			{...props}
			class={`transition-colors duration-200 ease-in-out border bg-red-500 active:bg-red-800 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent py-2 font-semibold hover:bg-red-700 px-4 rounded-lg text-white`}
		>
			{props.children}
		</button>
	);
};
export default Button;
