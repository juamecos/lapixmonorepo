'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './MenuMobile.module.scss';
import MenuMobileProps from './MenuMobileProps';
import Link from 'next/link';
import Button from '../../atoms/Button';
import useScroll from 'apps/web/app/hooks/useScroll';

export default function MenuMobile({ links, loggedIn }: MenuMobileProps) {
	const [showMenu, setShowMenu] = useState(true);
	const scrollThresholdFadeIn = 20;

	const { scrollY, scrollDirection, difference } = useScroll();
	const filteredLinks = useMemo(
		() => links.filter(link => loggedIn || !link.login),
		[loggedIn],
	);
	const absoluteDifference = Math.abs(difference);

	useEffect(() => {
		if (scrollDirection === 'down' && scrollY > 200) {
			setShowMenu(false);
		} else if (scrollDirection === 'up' && scrollY < 200) {
			setShowMenu(true);
		} else if (absoluteDifference > scrollThresholdFadeIn) {
			setShowMenu(false);
		}
	}, [scrollY, absoluteDifference, scrollDirection]);

	const MenuMobileClassName = useMemo(() => {
		return [styles.MenuMobile, showMenu ? styles.fadeIn : styles.fadeOut].join(
			' ',
		);
	}, [showMenu]);

	return (
		<nav className={MenuMobileClassName}>
			<div className={styles.linksContainer}>
				{filteredLinks.map(link => (
					<div key={link.text} className={styles.linkWrapper}>
						<Link href={link.link} className={styles.link}>
							<Button
								type='clear'
								icon={{ name: link.icon, size: 'large' }}
								iconStyle={{ height: '2.4rem', width: '2.4rem' }}
								variant='secondary'
								title={link.text}
								iconPosition='top'
							/>
						</Link>
					</div>
				))}
			</div>
		</nav>
	);
}
