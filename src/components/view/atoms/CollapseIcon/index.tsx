// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { TiArrowSortedDown } from 'react-icons/ti';
import cn from 'classnames';

import { ReactIcon } from 'components/view/atoms/ReactIcon';

import './styles.scss';

interface IProps {
  onClick?(): void;
  open?: boolean;
  id: string;
}

export function CollapseIcon({ onClick, open, id }: IProps): ReactElement {
  const collapseIconClass = cn({
    'collapse-icon': true,
    'collapse-icon--open': open
  });

  return (
    <div className={collapseIconClass} onClick={onClick} id={id}>
      <ReactIcon size="md" color="on-primary">
        <TiArrowSortedDown />
      </ReactIcon>
    </div>
  );
}
