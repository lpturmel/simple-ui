import { Component, JSX } from "solid-js";

interface VStackProps extends JSX.HTMLAttributes<HTMLDivElement> {}
const VStack: Component<VStackProps> = (props) => {
    return (
        <div {...props} class="flex flex-col space-y-2">
            {props.children}
        </div>
    );
};
export default VStack;
