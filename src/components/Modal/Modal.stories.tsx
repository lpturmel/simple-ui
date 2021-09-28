import ModalOverlay from "./ModalOverlay";
import ModalBody from "./ModalBody";
import { Modal } from ".";
import ModalHeader from "./ModalHeader";
import { SimpleProvider } from "../../context/SimpleContext";
import ModalContent from "./ModalContent";
import createControls from "../../apis/createControls";
import { Button } from "../Button/Button";
import ModalFooter from "./ModalFooter";
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
				<ModalHeader>I am a header</ModalHeader>
				<ModalBody>
					Sit nulla est ex deserunt exercitation anim occaecat.
					Nostrud ullamco deserunt aute id consequat veniam incididunt
					duis in sint irure nisi. Mollit officia cillum Lorem ullamco
					minim nostrud elit officia tempor esse quis. Sunt ad dolore
					quis aute consequat. Magna exercitation reprehenderit magna
					aute tempor cupidatat consequat elit dolor adipisicing.
					Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
					duis sit officia eiusmod Lorem aliqua enim laboris do dolor
					eiusmod. Et mollit incididunt nisi consectetur esse laborum
					eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
					nostrud ad veniam.
				</ModalBody>
				<ModalFooter>
					<HStack w="full" justifyContent="end" spacingX={2}>
						<Button bg="gray.400" onClick={controls.close}>
							Cancel
						</Button>
						<Button bg="blue.400">Save</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	</SimpleProvider>
);
