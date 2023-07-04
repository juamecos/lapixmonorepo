import React from 'react';

import ImageProps from './ImageProps';
import styles from './Image.module.scss';

import { default as NextImage } from 'next/image';

const Image: React.FC<ImageProps> = ({
	imageUrl,
	alt,
	isBackground,
	children,
}) => {
	const containerClass = isBackground
		? styles.backgroundContainer
		: styles.container;
	const imageClass = isBackground ? styles.backgroundImage : styles.image;
	// TODO Make Image background with children
	return (
		<div className={containerClass}>
			{isBackground ? (
				<div
					className={imageClass}
					style={{ backgroundImage: `url(${imageUrl})` }}
					role='img'
					aria-label={alt}
				/>
			) : (
				<NextImage
					src={imageUrl}
					alt={alt || `image - ${imageUrl}`}
					className={imageClass}
				/>
			)}
			{children && <div className={styles.overlayContent}>{children}</div>}
		</div>
	);
};

export default Image;
