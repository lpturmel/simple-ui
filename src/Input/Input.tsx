import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../props";
import { mapPropsToTw } from "../props/Global";

interface InputProps
    extends MainProps<JSX.InputHTMLAttributes<HTMLInputElement>> {}
const Input: Component<InputProps> = (props) => {
    const tw = mapPropsToTw<PropsWithChildren<InputProps>>(props);
    return (
        <input
            {...props}
            class={`${tw} transition-colors duration-200 ease-in-out hover:bg-gray-300 py-2 px-4 bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent font-semibold rounded-lg placeholder-gray-600"`}
        />
    );
};
export default Input;
