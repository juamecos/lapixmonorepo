// Componente de avatar similar a React Native Elements para Nextjs

import React from 'react';

import AvatarProps from './AvatarProps';
import styles from './Avatar.module.scss';

// Default source image
const defaultSource = 'https://i.pravatar.cc/150?u=fake@pravatar.com';

export default function Avatar({
	size = 'medium',
	rounded,
	source,
	title,
	style,
	onClick,
	...rest
}: AvatarProps) {
	const avatarStyle = [
		styles.avatar,
		rounded && styles.rounded,
		styles[size],
	].join(' ');

	const getTitleInitials = (title: string) => {
		const initials = title
			.split(' ')
			.map(name => name.charAt(0).toUpperCase())
			.join('');

		return initials.slice(0, 2);
	};

	const renderFallbackContent = () => {
		const initials = getTitleInitials(title);

		return <div className={styles.fallbackContent}>{initials}</div>;
	};

	return (
		<div
			className={avatarStyle}
			style={{ ...style }}
			onClick={onClick}
			{...rest}
		>
			{source && <img src={source} alt={title} />}
			{!source && renderFallbackContent()}
		</div>
	);
}
