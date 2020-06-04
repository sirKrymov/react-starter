// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IProps {
  onClick(): void;
  mirror?: boolean;
  open?: boolean;
  id: string;
}

export function HamburgerButton({
  onClick,
  mirror,
  open = false,
  id
}: IProps): ReactElement {
  const hamburgerButtonClass = cn({
    'hamburger-btn': true,
    'hamburger-btn--mirror-open': mirror && open,
    'hamburger-btn--mirror': mirror,
    'hamburger-btn--open': open
  });

  return (
    <button className={hamburgerButtonClass} onClick={onClick} id={id}>
      <p />
      <p />
      <p />
    </button>
  );
}
