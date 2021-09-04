import ModalOverlay from "./ModalOverlay/ModalOverlay";
import ModalBody from "./ModalBody/ModalBody";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader/ModalHeader";
import { SimpleProvider } from "../../context/SimpleContext";
import ModalContent from "./ModalContent/ModalContent";
import createControls from "../../apis/createControls";
import Button from "../Button/Button";

export default {
	component: Modal,
	title: "UI/Modal",
};

const { isOpen, open, close } = createControls();

export const Default = () => (
	<SimpleProvider>
		<Button onClick={open} bg="blue.200" px={4} py={2}>
			Open Modal
		</Button>
		<Modal isOpen={isOpen()}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Test</ModalHeader>
				<ModalBody>
					<Button onClick={close} bg="red.200" px={4} py={2}>
						Close
					</Button>
					<p>beau body</p>
				</ModalBody>
			</ModalContent>
		</Modal>
	</SimpleProvider>
);
