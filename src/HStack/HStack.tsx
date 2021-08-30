import { Component, JSX, PropsWithChildren } from "solid-js";
import MainProps from "../props";
import { mapPropsToTw } from "../props/Global";

interface HStackProps extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {}
const HStack: Component<HStackProps> = (props) => {
    const tw = mapPropsToTw<PropsWithChildren<HStackProps>>(props);

    return (
        <div {...props} class={`${tw} flex flex-row space-x-2`}>
            {props.children}
        </div>
    );
};
export default HStack;
