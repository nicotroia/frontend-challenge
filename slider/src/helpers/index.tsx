import { useEffect, useRef } from 'react';

export const usePrevious = (value: number | string): number | string => {
  const ref = useRef<number | string>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
