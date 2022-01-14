import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SWIPEABLE_CONFIG } from './constants';

import styles from './styles.scss';

const App = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const handleSwipeLeft = () => setIndex(Math.min(2, index + 1));
  const handleSwipeRight = () => setIndex(Math.max(0, index - 1));

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    ...SWIPEABLE_CONFIG,
  });

  return (
    <div className={styles.app}>
      <div className={styles.touchable} {...handlers}>
        <div className={styles.top}>
          <Header index={index} />
        </div>
        <div className={styles.bottom}>
          <Footer index={index} />
        </div>
      </div>
    </div>
  );
};

export default App;
