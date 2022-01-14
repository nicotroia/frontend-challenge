import { useEffect, useState } from 'react';

import { usePrevious } from '@/helpers';

const useDirection = (index: number): number => {
  const prevIndex = usePrevious(index);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (prevIndex !== index) {
      setDirection(index > prevIndex ? 1 : -1);
    }
  }, [index]);

  return direction;
};

export default useDirection;
