import React from 'react';
import styles from './ImageBackground.module.scss';
import ImageBackgroundProps from './ImageBackgroundProps';

const ImageBackground: React.FC<ImageBackgroundProps> = ({
	imageUrl,
	alt,
	children,
}) => {
	return (
		<div
			className={styles.imageBackground}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			<img
				src={imageUrl}
				alt={alt}
				aria-hidden='true'
				className={styles.srOnly}
			/>
			{children}
		</div>
	);
};

export default ImageBackground;
