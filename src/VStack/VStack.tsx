import { Component, JSX, PropsWithChildren } from "solid-js";
import { mapPropsToTw } from "../props/Global";

interface VStackProps extends JSX.HTMLAttributes<HTMLDivElement> {}
const VStack: Component<VStackProps> = (props) => {
    const tw = mapPropsToTw<PropsWithChildren<VStackProps>>(props);

    return (
        <div {...props} class={`${tw} flex flex-col space-y-2`}>
            {props.children}
        </div>
    );
};
export default VStack;
