// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';

import { Typography } from '../../../atoms/Typography';
import { ReactIcon } from '../../../atoms/ReactIcon';

import './styles.scss';

interface IProps {
  onClose?(): void;
  title?: string;
}

export function ModalHeader({ onClose, title }: IProps): ReactElement | null {
  return onClose || title ? (
    <div className="modal-header">
      {title && (
        <Typography className="modal-header__title" variant="h3" noWrap>
          {title}
        </Typography>
      )}

      {onClose && (
        <ReactIcon
          className="modal-header__close-btn"
          onClick={onClose}
          size="xl"
        >
          <IoMdCloseCircle />
        </ReactIcon>
      )}
    </div>
  ) : null;
}
