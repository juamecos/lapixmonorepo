import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './FAB.module.scss';
import FABProps from './FABProps';
import Button from '../Button';
import useScroll from 'apps/web/app/hooks/useScroll';
import Link from 'next/link';

export default function FAB({
	title,
	type,
	variant,
	icon,
	href,
	...rest
}: FABProps) {
	const [showFAB, setShowFAB] = useState(false);
	const { scrollY } = useScroll();

	// Mock data for login
	const login = true;

	useEffect(() => {
		if (scrollY < 100) {
			setShowFAB(false);
		} else {
			setShowFAB(true);
		}
	}, [scrollY]);

	const FABClassName = useMemo(() => {
		return [styles.FAB, scrollY > 100 ? styles.fadeIn : styles.fadeOut].join(
			' ',
		);
	}, [scrollY]);

	return (
		<Link className={FABClassName} href={href ? href : '#'}>
			<Button
				title={title}
				rounded
				type={type}
				variant={variant}
				icon={icon}
				{...rest}
			/>
		</Link>
	);
}
