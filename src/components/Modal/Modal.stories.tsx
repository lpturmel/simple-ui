import ModalOverlay from "./ModalOverlay";
import ModalBody from "./ModalBody";
import { Modal } from ".";
import ModalHeader from "./ModalHeader";
import { SimpleProvider } from "../../context/SimpleContext";
import ModalContent from "./ModalContent";
import createControls from "../../apis/createControls";
import { Button } from "../Button/Button";
import { HStack } from "../HStack";

export default {
	component: Modal,
	title: "UI/Modal",
};

const controls = createControls();
export const Default = () => (
	<SimpleProvider>
		<Button onClick={controls.open} bg="blue.200" px={4} py={2}>
			Open Modal
		</Button>
		<Modal isOpen={controls.isOpen} controls={controls}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Test</ModalHeader>
				<ModalBody>
					<HStack spacingX={4}>
						<Button
							onClick={controls.close}
							bg="red.200"
							px={4}
							py={2}
						>
							Close
						</Button>
						<p>beau body</p>
					</HStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	</SimpleProvider>
);
