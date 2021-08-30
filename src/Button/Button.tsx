import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../props";
import { mapPropsToTw } from "../props/Global";

interface ButtonProps
    extends MainProps<JSX.ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button: Component<ButtonProps> = (props) => {
    const tw = mapPropsToTw<PropsWithChildren<ButtonProps>>(props);
    return (
        <button
            {...props}
            class={`${tw} transition-colors p duration-200 ease-in-out bg-red-500 active:bg-red-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-semibold hover:bg-red-700 rounded-lg text-white`}
        >
            {props.children}
        </button>
    );
};
export default Button;
