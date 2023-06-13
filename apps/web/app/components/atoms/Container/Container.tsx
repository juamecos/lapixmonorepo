import React from 'react';
import styles from './Container.module.scss';
import ContainerProps from './ContainerProps';

export default function Container({ children }: ContainerProps) {
	return <div className={styles.container}>{children}</div>;
}
