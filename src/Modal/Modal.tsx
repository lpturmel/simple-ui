import { Component, JSX, useContext } from "solid-js";
import { Portal } from "solid-js/web";
import { SimpleContext } from "../context/SimpleContext";
import MainProps from "../props";

interface ModalProps extends MainProps<JSX.HTMLAttributes<HTMLDivElement>> {
	isOpen: boolean;
}
const Modal: Component<ModalProps> = (props) => {
	const [state]: any = useContext(SimpleContext);

	return (
		<>
			{props.isOpen && (
				<Portal mount={state.portal}>
					<div class="overflow-auto flex flex-col justify-center align-middle fixed h-screen w-screen top-0 left-0 z-50">
						{props.children}
					</div>
				</Portal>
			)}
		</>
	);
};
export default Modal;
