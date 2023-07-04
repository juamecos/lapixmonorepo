import React, { useMemo } from 'react';
import styles from './MenuDesktop.module.scss';
import MenuDesktopProps from './MenuDesktopProps';
import Link from 'next/link';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo/Logo';
import Avatar from '../../atoms/Avatar/Avatar';

export default function MenuDesktop({ links, loggedIn }: MenuDesktopProps) {
	const filteredLinks = useMemo(
		() => links.filter(link => loggedIn || !link.login),
		[loggedIn],
	);

	return (
		<nav className={styles.MenuDesktop}>
			<div className={styles.LogoContainer}>
				<Logo src='/assets/logo-cropped.webp' href='/' alt='logo' />
			</div>
			<ul className={styles.links}>
				{links
					.filter(link => loggedIn || !link.login)
					.map((link, index) => (
						<li key={index} className='link-wrapper'>
							<Link href={link.link}>
								<Button
									type='clear'
									icon={{ name: link.icon, size: 'large' }}
									iconStyle={{ height: '2.4rem', width: '2.4rem' }}
									variant='secondary'
									title={link.text}
									iconPosition='left'
								/>
							</Link>
						</li>
					))}
			</ul>
			{loggedIn ? (
				// AvatarContainer
				<div className={styles.AvatarContainer}>
					<Avatar title={'username'} />
				</div>
			) : null}
		</nav>
	);
}
