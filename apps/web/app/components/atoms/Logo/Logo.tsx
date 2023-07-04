import React from 'react';
import styles from './Logo.module.scss';
import LogoProps from './LogoProps';
import Image from 'next/image';

import Link from 'next/link';

export default function Logo({ src, href, alt }: LogoProps) {
	return (
		<div className={styles.Logo}>
			<Link href={href} passHref>
				<Image src={src} alt={alt} width={50} height={50} />
			</Link>
		</div>
	);
}
