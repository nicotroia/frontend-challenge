import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Transition } from 'react-transition-group';
import cx from 'clsx';

import useDirection from '@/helpers/useDirection';
import { ICONS } from './constants';

import styles from './styles.scss';

export type Props = {
  index: number;
};

const Footer = (props: Props): JSX.Element => {
  const { index } = props;

  const direction = useDirection(index);
  const directionClassName = direction === -1 ? styles.left : styles.right;

  return (
    <div className={styles.footer}>
      {ICONS.map((icon, i) => (
        <Transition key={icon.iconName} in={index === i} timeout={0}>
          {state => (
            <FontAwesomeIcon
              className={cx(styles.icon, styles[state], directionClassName)}
              icon={ICONS[i] as IconDefinition}
            />
          )}
        </Transition>
      ))}

      <div
        className={styles.background}
        style={{ transform: `translateX(${-index * 100}vw)` }}
      />
    </div>
  );
};

export default Footer;
