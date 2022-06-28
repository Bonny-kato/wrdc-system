import { Dialog, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";
import {useGlobalContext} from "../context/global-context";
const portalRoot = document.getElementById("portal-root");

const Modal = ({ isOpen, onClose, children }) => {
	const {currTheme} = useGlobalContext()
	if (!isOpen) {
		return null;
	}


	return createPortal(
		<Transition appear show={isOpen} as={"div"}>
			<Dialog
				onClose={onClose}
				className="fixed inset-0 top-0 z-10 p-5 pt-[25vh]"
			>
				<Transition.Child
					enter="duration-300 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-200 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
				</Transition.Child>

				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-50"
					enterTo="opacity-100 scale-100"
					leave="ease-out  duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-50"
				>
					<div theme={currTheme} className={'flex justify-center'}>
						{children}
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>,
		portalRoot
	);
};

export default Modal;
