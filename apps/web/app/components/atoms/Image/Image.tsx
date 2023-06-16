import React from 'react';
import ImageProps from './ImageProps';
import styles from './Image.module.scss';

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
				<picture>
					<source srcSet={imageUrl} type='image/webp' />
					<img src={imageUrl} alt={alt} className={imageClass} />
				</picture>
			)}
			{children && <div className={styles.overlayContent}>{children}</div>}
		</div>
	);
};

export default Image;
