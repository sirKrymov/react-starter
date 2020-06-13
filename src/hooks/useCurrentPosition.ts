import { useState, useEffect } from 'react';

export const useCurrentPosition = (): number => {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = (): void => setPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return position;
};
