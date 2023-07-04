import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface ModalProps extends PropsWithChildren<{}> {
	title?: string;
	children: React.ReactNode;
	isVisible: boolean;
	acceptButton?: boolean;
	acceptButtonTitle?: string;
	cancelButton?: boolean;
	cancelButtonTitle?: string;
	acceptButtonOnPress?: () => void;
	cancelButtonOnPress?: () => void;
	handleClose?: Dispatch<SetStateAction<boolean>>;
}

export default ModalProps;
