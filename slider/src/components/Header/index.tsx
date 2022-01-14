import React from 'react';
import { Transition } from 'react-transition-group';
import cx from 'clsx';

import useDirection from '@/helpers/useDirection';
import { LABELS } from './constants';

import styles from './styles.scss';

export type Props = {
  index: number;
};

const Header = (props: Props): JSX.Element => {
  const { index } = props;

  const direction = useDirection(index);
  const directionClassName = direction === -1 ? styles.left : styles.right;

  return (
    <div className={styles.header}>
      {LABELS.map((label, i) => {
        const { title, subtitle, className } = label;

        return (
          <div key={title} className={styles.titleContainer}>
            <Transition in={index === i} timeout={0}>
              {(state: string): JSX.Element => (
                <div
                  className={cx(
                    styles.indexCircle,
                    className,
                    styles.animate,
                    styles[state],
                    directionClassName
                  )}
                >
                  <span className={styles.indexLabel}>{index}</span>
                </div>
              )}
            </Transition>
            <Transition in={index === i} timeout={20}>
              {(state: string): JSX.Element => (
                <h1
                  className={cx(
                    styles.title,
                    styles.animate,
                    styles[state],
                    directionClassName
                  )}
                >
                  {title}
                </h1>
              )}
            </Transition>
            <Transition in={index === i} timeout={50}>
              {(state: string): JSX.Element => (
                <h1
                  className={cx(
                    styles.subtitle,
                    styles.animate,
                    styles[state],
                    directionClassName
                  )}
                >
                  {subtitle}
                </h1>
              )}
            </Transition>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
