import { useState } from 'react';
import useModal from './useModal';

/**
 *
 * @param initialMode <boolean> If true, modal is visible
 * @param initialSelected <T> Selected item
 * @returns hook that gets the data from the selected item in a list or table etc
 */

export default function useModalWithData<T>(
	initialMode = false,
	initialSelected: T | null = null,
) {
	const { modalOpen, setModalOpen } = useModal(initialMode);

	// prettier-ignore
	const [selected, setSelected] = useState<T | null>(initialSelected);
	const setModalState = (state: boolean) => {
		setModalOpen(state);
		if (state === false) {
			setSelected(null);
		}
	};
	return { modalOpen, setModalOpen, selected, setSelected, setModalState };
}

// Path: libs\shared\src\hooks\useModal.tsx
