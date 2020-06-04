// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { SvgIcon } from '../SvgIcon';

import { eyeCrossedIcon, eyeIcon } from 'constants/icons';

import './styles.scss';

interface IProps {
  isVisible: boolean;
  onClick(): void;
  id: string;
}

export function VisibilityIcon({
  isVisible,
  onClick,
  id
}: IProps): ReactElement {
  return (
    <div className="visibility-icon" onClick={onClick} id={id}>
      <SvgIcon size="lg" src={isVisible ? eyeCrossedIcon : eyeIcon} />
    </div>
  );
}
