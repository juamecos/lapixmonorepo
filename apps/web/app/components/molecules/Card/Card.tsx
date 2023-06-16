import styles from './Card.module.scss';
import CardProps from './CardProps';
import Avatar from '../../atoms/Avatar';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import ImageBackground from '../../atoms/ImageBackground';
import Image from '../../atoms/Image';

export default function Card(props: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<ImageBackground {...props}>
					<div className={styles.content}>
						<Card.header {...props} />
						<Card.body {...props} />
						<Card.footer {...props} />
					</div>
				</ImageBackground>
			</div>
		</div>
	);
}

Card.header = function CardHeader(props: CardProps) {
	return (
		<div className={styles.header}>
			<div className={styles.headerLeft}>
				<Avatar title='Juan' size='medium' />
				<div className={styles.headerInfo}>
					<Text p bold title='username' textColor={'white'} />
					<Text p title='published' textColor={'white'} />
				</div>
			</div>
			<div className={styles.headerRight}>
				<Icon name='ellipsis-vertical-outline' size='large' color={'white'} />
			</div>
		</div>
	);
};

Card.body = function CardBody(props: CardProps) {
	return (
		<div className={styles.body}>
			<div className={styles.bodyContainer}></div>
		</div>
	);
};

Card.footer = function CardFooter(props: CardProps) {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLeft}>
				<Icon name='eye-outline' size='large' color={'white'} />
			</div>
			<div className={styles.footerRight}>
				<Icon name='chatbubble-outline' size='large' color={'white'} />
				<Icon name='heart-outline' size='large' color={'white'} />
			</div>
		</div>
	);
};
