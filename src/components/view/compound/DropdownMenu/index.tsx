import React, { ReactElement, ReactNode, useRef } from 'react';

import useOnclickOutside from 'react-cool-onclickoutside';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  onOutsideClick(): void;
  classname?: string;
  children: ReactNode;
  button: ReactNode;
  open: boolean;
}

export function DropdownMenu({
  onOutsideClick,
  classname,
  children,
  button,
  open
}: IProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useOnclickOutside(ref, onOutsideClick);

  const wrappClass = cn(
    {
      'dropdown-menu': true,
      'dropdown-menu--open': open
    },
    classname
  );

  return (
    <div className={wrappClass}>
      <div className="dropdown-menu__button-wrapper">{button}</div>

      {open && (
        <div className="dropdown-menu__list" ref={ref}>
          {children}
        </div>
      )}
    </div>
  );
}
