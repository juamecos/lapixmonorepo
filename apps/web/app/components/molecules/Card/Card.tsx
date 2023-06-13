import React from 'react';
import styles from './Card.module.scss';
import CardProps from './CardProps';

export default function Card(props: CardProps) {
  return (
    <div className={styles.Card}>
      Card
    </div>
  );
}
