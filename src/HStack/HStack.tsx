import { Component, JSX } from "solid-js";
import MainProps from "../props";

interface HStackProps extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const HStack: Component<HStackProps> = (props) => {
    return (
        <div {...props} class="flex flex-row space-x-2">
            {props.children}
        </div>
    );
};
export default HStack;
