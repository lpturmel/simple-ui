import { Component } from "solid-js";

const ModalHeader: Component = (props) => {
	return (
		<div class="flex flex-row justify-between w-full p-2">
			{props.children}
			<p>X</p>
		</div>
	);
};
export default ModalHeader;
