import { useEffect, useReducer, useMemo, useCallback } from 'react';
import debounce from '../utils/debounce';

type SSRRect = {
	bottom: number,
	height: number,
	left: number,
	right: number,
	top: number,
	width: number,
	x: number,
	y: number,
};

const EmptySSRRect: SSRRect = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0,
};

type ScrollState = {
	lastScrollTop: number,
	bodyOffset: SSRRect | DOMRect,
	scrollY: number,
	scrollX: number,
	scrollDirection: 'down' | 'up' | undefined,
	difference: number,
};

type ScrollAction =
	| { type: 'SET_LAST_SCROLL_TOP', payload: number }
	| { type: 'SET_BODY_OFFSET', payload: SSRRect | DOMRect }
	| { type: 'SET_SCROLL_Y', payload: number }
	| { type: 'SET_SCROLL_X', payload: number }
	| { type: 'SET_SCROLL_DIRECTION', payload: 'down' | 'up' | undefined }
	| { type: 'SET_DIFFERENCE', payload: number };

const scrollReducer = (
	state: ScrollState,
	action: ScrollAction,
): ScrollState => {
	switch (action.type) {
		case 'SET_LAST_SCROLL_TOP':
			return { ...state, lastScrollTop: action.payload };
		case 'SET_BODY_OFFSET':
			return { ...state, bodyOffset: action.payload };
		case 'SET_SCROLL_Y':
			return { ...state, scrollY: action.payload };
		case 'SET_SCROLL_X':
			return { ...state, scrollX: action.payload };
		case 'SET_SCROLL_DIRECTION':
			return { ...state, scrollDirection: action.payload };
		case 'SET_DIFFERENCE':
			return { ...state, difference: action.payload };

		default:
			return state;
	}
};

export default function useScroll() {
	const initialState: ScrollState = useMemo(
		() => ({
			lastScrollTop: 0,
			bodyOffset:
				typeof window === 'undefined' || !window.document
					? EmptySSRRect
					: document.body.getBoundingClientRect(),
			scrollY: 0,
			scrollX: 0,
			scrollDirection: undefined,
			difference: 0,
		}),
		[],
	);

	const [state, dispatch] = useReducer(scrollReducer, initialState);

	const currentBodyOffset =
		typeof window === 'undefined' || !window.document
			? EmptySSRRect
			: document.body.getBoundingClientRect();

	const listener = useCallback(
		debounce(() => {
			const currentScrollTop = -currentBodyOffset.top;
			const difference = currentScrollTop - state.lastScrollTop;

			dispatch({
				type: 'SET_LAST_SCROLL_TOP',
				payload: -currentBodyOffset.top,
			});
			dispatch({ type: 'SET_BODY_OFFSET', payload: currentBodyOffset });
			dispatch({ type: 'SET_SCROLL_Y', payload: -currentBodyOffset.top });
			dispatch({ type: 'SET_SCROLL_X', payload: currentBodyOffset.left });
			dispatch({
				type: 'SET_SCROLL_DIRECTION',
				payload: state.lastScrollTop < -currentBodyOffset.top ? 'down' : 'up',
			});
			dispatch({ type: 'SET_DIFFERENCE', payload: difference });
		}, 10),
		[state.lastScrollTop, currentBodyOffset.top],
	);

	useEffect(() => {
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, [listener]);

	const { scrollY, scrollX, scrollDirection, difference } = state;

	return {
		scrollY,
		scrollX,
		scrollDirection,
		difference,
	};
}
