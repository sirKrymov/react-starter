// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import { useEffect, useState, ReactNode } from 'react';

interface IProps {
  switchingPoint?: string;
  desktop?: ReactNode | null;
  mobile?: ReactNode | null;
}

export function ResizeRp({
  switchingPoint = '992',
  desktop,
  mobile
}: IProps): ReactNode | null {
  const [isMobile, setVersion] = useState(window.innerWidth < +switchingPoint);

  function listener(e: { matches: any }): void {
    if (e.matches) {
      setVersion(true);
    } else {
      setVersion(false);
    }
  }

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${switchingPoint}px)`);

    media.addListener(listener);

    return (): void => {
      media.removeListener(listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMobile ? (mobile ? mobile : null) : desktop ? desktop : null;
}
