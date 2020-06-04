// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { useEffect, ReactNode, ReactElement } from 'react';

import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ModalHeader } from './ModalHeader';

import './styles.scss';

interface IProps {
  bodyHeight?: 'default' | 'full';
  noPadding?: boolean;
  closeIcon?: boolean;
  onClose?(): void;
  children: ReactNode;
  width?: 'xs' | 'sm' | 'md' | 'min-content' | 'full';
  title?: string;
  open: boolean;
}

export function Modal({
  bodyHeight,
  noPadding,
  closeIcon = true,
  children,
  width = 'sm',
  onClose,
  title,
  open
}: IProps): ReactElement {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.body.setAttribute('class', 'overflow-hidden');
      }, 250);
    } else {
      document.body.removeAttribute('class');
    }
  }, [open]);

  const modalClass = cn({
    modal: true,
    'modal--open': open
  });
  const modalContent = cn({
    [`modal__content`]: true,
    [`modal__content--width-${width}`]: width,
    [`modal__content--body-height-${bodyHeight}`]: bodyHeight
  });
  const modalBodyClass = cn({
    [`modal__body`]: true,
    ' modal__content--no-padding': noPadding
  });

  return createPortal(
    open ? (
      <div className={modalClass}>
        <div className={modalContent}>
          {(title || (closeIcon && onClose)) && (
            <ModalHeader onClose={onClose} title={title} />
          )}

          <div className={modalBodyClass}>{children}</div>
        </div>

        <div className="modal__backdrop" />
      </div>
    ) : null,
    document.body
  );
}
