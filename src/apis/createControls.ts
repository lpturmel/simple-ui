import { Accessor, createSignal } from "solid-js";

export interface ICreateControls {
	isOpen: Accessor<boolean>;
	close: () => void;
	open: () => void;
}
export default (): ICreateControls => {
	const [isOpen, setIsOpen] = createSignal(false);

	return {
		isOpen,
		close: () => setIsOpen(false),
		open: () => setIsOpen(true),
	};
};
