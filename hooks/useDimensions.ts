import { useEffect, useState } from 'react';

interface IDimensions {
  width: number | undefined;
  height: number | undefined;
}

export const useDimensions = () => {
  const [windowSize, setWindowSize] = useState<IDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
};
