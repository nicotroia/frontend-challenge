import React from 'react';

import styles from './styles.module.scss';

export type Props = {
  index: number;
};

const Footer = (props: Props): JSX.Element => {
  const { index } = props;

  return (
    <div className={styles.footer}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
