import React from 'react';
import styles from './Menu.module.scss';
import MenuProps from './MenuProps';
import MenuMobile from '../../molecules/MenuMobile';
import MenuDesktop from '../../molecules/MenuDesktop';

export default function Menu({ links, loggedIn }: MenuProps) {
	return (
		<>
			<MenuMobile links={links} loggedIn={loggedIn} />
			<MenuDesktop links={links} loggedIn={loggedIn} />
		</>
	);
}
