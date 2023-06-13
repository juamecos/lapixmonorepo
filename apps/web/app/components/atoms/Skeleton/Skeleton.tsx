import React from 'react';
import styles from './Skeleton.module.scss';
import SkeletonProps from './SkeletonProps';
import classNames from 'classnames';

// A placeholder preview for content before the data gets loaded, an alternative for spinners.
export default function Skeleton({
	width,
	height,
	shape = 'rounded',
	style,
	className,
}: SkeletonProps) {
	const skeletonClassName = classNames(
		styles.skeleton,
		shape === 'rounded' ? styles.rounded : styles.circle,
		className,
	);
	return (
		<div
			accessibility-role='none'
			accessibility-label='loading...'
			className={skeletonClassName}
			style={{
				width,
				height,
				...style,
			}}
		/>
	);
}
