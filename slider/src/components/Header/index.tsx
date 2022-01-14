import React from 'react';
import cx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LABELS } from './constants';

import styles from './styles.scss';

export type Props = {
  index: number;
};

const Header = (props: Props): JSX.Element => {
  const { index } = props;

  const { title, subtitle, className } = LABELS[index];

  return (
    <div className={styles.header}>
      <div className={cx(styles.indexCircle, className)}>
        <span className={styles.indexLabel}>{index}</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.subtitle}>{subtitle}</h1>
    </div>
  );
};

export default Header;
