import { Component, JSX, PropsWithChildren } from "solid-js";

const ModalOverlay: Component = (props) => {
	return (
		<div
			class="fixed h-screen w-screen top-0 left-0"
			style={{ "z-index": 10, color: "rgba(0, 0, 0, 0.48)" }}
		></div>
	);
};
export default ModalOverlay;
