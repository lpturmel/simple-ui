import { Component } from "solid-js";

const ModalContent: Component = (props) => {
	return (
		<div class="m-auto w-full h-full flex flex-col p-2 max-w-md max-h-32 bg-gray-100 rounded-md z-50">
			{props.children}
		</div>
	);
};
export default ModalContent;
