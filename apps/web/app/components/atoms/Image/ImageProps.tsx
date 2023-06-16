import React, { ReactNode } from 'react';

interface ImageProps {
	imageUrl: string;
	alt?: string;
	isBackground?: boolean;
	children?: ReactNode;
}

export default ImageProps;
