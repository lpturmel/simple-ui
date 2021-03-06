import { Component } from "solid-js";
import Layout from "./Layout";
import {
	Modal,
	ModalOverlay,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalFooter,
	HStack,
	Button,
	createControls,
} from "simple-ui-solid";
import Prism from "prismjs";

Prism.highlightAll();

const ModalComponent: Component = (props) => {
	const controls = createControls();
	const code = `
const Modal: Component = (props) => {
    const controls = createControls();
    return (
        <>
            <Button onClick={controls.open} bg="blue.200" px={4} py={2}>
                Open Modal
            </Button>
            <Modal isOpen={controls.isOpen} controls={controls}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>I am a header</ModalHeader>
                    <ModalBody>
                        Sit nulla est ex deserunt exercitation anim occaecat.
                        Nostrud ullamco deserunt aute id consequat veniam
                        incididunt duis in sint irure nisi. Mollit officia
                        cillum Lorem ullamco minim nostrud elit officia tempor
                        esse quis.
                    </ModalBody>
                    <ModalFooter>
                        <HStack w="full" justifyContent="end" spacingX={2}>
                            <Button bg="gray.400" onClick={controls.close}>
                                Cancel
                            </Button>
                            <Button bg="blue.400">Save</Button>{" "}
                        </HStack>{" "}
                    </ModalFooter>{" "}
                </ModalContent>{" "}
            </Modal>{" "}
        </>
    );
};
    `;

	return (
		<>
			<Button onClick={controls.open} class="bg-blue-200 px-4 py-2">
				Open Modal
			</Button>
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
							<Button
								class="bg-gray-400"
								onClick={controls.close}
							>
								Cancel
							</Button>
							<Button class="bg-blue-400">Save</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<pre class="prism-code language-js">
				<code>{code}</code>
			</pre>
		</>
	);
};
export default ModalComponent;
