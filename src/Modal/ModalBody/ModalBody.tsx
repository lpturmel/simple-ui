import { Component } from "solid-js";

const ModalBody: Component = (props) => {
	return <div class="z-50">{props.children}</div>;
};
export default ModalBody;
