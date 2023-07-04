'use client';
import React from 'react';
import styles from './Modal.module.scss';
import ModalProps from './ModalProps';

import useModal from 'libs/shared/src/hooks/useModal';

export default function Modal({
	title,
	children,
	isVisible,
	acceptButton,
	acceptButtonTitle,
	cancelButton,
	cancelButtonTitle,
	acceptButtonOnPress,
	cancelButtonOnPress,
}: ModalProps): JSX.Element | null {
	const { modalOpen, toggleModal } = useModal(isVisible);

	const handleAcceptButtonPress = () => {
		if (acceptButtonOnPress) {
			acceptButtonOnPress();
		}
		toggleModal();
	};

	const handleCancelButtonPress = () => {
		if (cancelButtonOnPress) {
			cancelButtonOnPress();
		}
		toggleModal();
	};

	const modalClassName = [styles.modal, modalOpen ? styles.open : ''].join(' ');

	return (
		<div className={modalClassName}>
			<div className={styles.modalContent}>
				{title && <h2>{title}</h2>}
				<div className={styles.modalBody}>{children}</div>
				<div className={styles.modalFooter}>
					{acceptButton && (
						<button onClick={handleAcceptButtonPress}>
							{acceptButtonTitle || 'Accept'}
						</button>
					)}
					{cancelButton && (
						<button onClick={handleCancelButtonPress}>
							{cancelButtonTitle || 'Cancel'}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
