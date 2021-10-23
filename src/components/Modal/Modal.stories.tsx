import { ModalOverlay } from "./ModalOverlay";
import { ModalBody } from "./ModalBody";
import { Modal } from ".";
import { ModalHeader } from "./ModalHeader";
import { SimpleProvider } from "../../context/SimpleContext";
import { ModalContent } from "./ModalContent";
import { createControls } from "../../apis/createControls";
import { Button } from "../Button/Button";
import { ModalFooter } from "./ModalFooter";
import { HStack } from "../HStack";
import StoryWrapper from "../../StoryWrapper";

export default {
	component: Modal,
	title: "UI/Modal",
};

const controls = createControls();
export const Default = () => (
	<SimpleProvider>
		<StoryWrapper>
			<Button onClick={controls.open}>Open Modal</Button>
			<Modal isOpen={controls.isOpen} controls={controls}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>I am a header</ModalHeader>
					<ModalBody>
						Sit nulla est ex deserunt exercitation anim occaecat.
						Nostrud ullamco deserunt aute id consequat veniam
						incididunt duis in sint irure nisi. Mollit officia
						cillum Lorem ullamco minim nostrud elit officia tempor
						esse quis. Sunt ad dolore quis aute consequat. Magna
						exercitation reprehenderit magna aute tempor cupidatat
						consequat elit dolor adipisicing. Mollit dolor eiusmod
						sunt ex incididunt cillum quis. Velit duis sit officia
						eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et
						mollit incididunt nisi consectetur esse laborum eiusmod
						pariatur proident Lorem eiusmod et. Culpa deserunt
						nostrud ad veniam.
					</ModalBody>
					<ModalFooter>
						<HStack class="w-full justify-end space-x-2">
							<Button variant="ghost" onClick={controls.close}>
								Cancel
							</Button>
							<Button variant="lightHighContrast">Save</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</StoryWrapper>
	</SimpleProvider>
);
