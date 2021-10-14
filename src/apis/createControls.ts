import { Accessor, createSignal } from "solid-js";

export interface ICreateControls {
	isOpen: Accessor<boolean>;
	close: () => void;
	open: () => void;
}
/**
 * Api designed to work with the Modal component providing a boolean accessor and two functions to control the state
 *
 */
export const createControls = (): ICreateControls => {
	const [isOpen, setIsOpen] = createSignal(false);

	return {
		isOpen,
		close: () => setIsOpen(false),
		open: () => setIsOpen(true),
	};
};
