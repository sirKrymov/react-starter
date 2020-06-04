// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import { createPortal } from 'react-dom';
import cn from 'classnames';
import {
  IoIosInformationCircleOutline,
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
  IoIosWarning,
  IoIosClose
} from 'react-icons/io';

import { Typography } from 'components/view/atoms/Typography';
import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { Loader } from 'components/view/atoms/loaders/Loader';

import './styles.scss';

import { Toast as ToastType } from 'types/toasts.type';

interface IProps {
  removeToast(id: ToastType['id']): void;
  toastsState: string;
  toasts: ToastType[];
}

export function Toasts({
  toastsState,
  toasts,
  removeToast
}: IProps): ReactElement | null {
  const toastsTypeIcons = {
    success: <IoIosCheckmarkCircleOutline />,
    warning: <IoIosWarning />,
    error: <IoIosCloseCircleOutline />,
    info: <IoIosInformationCircleOutline />
  };

  return toasts.length
    ? createPortal(
        <ul className="toasts">
          {toasts.map(({ isLoading, autohide, message, type, id }) => {
            const toastClass = cn({
              [`toasts__item`]: true,
              'toasts__item--hide': toastsState === `hide ${id}`,
              [`toasts__item--${type}`]: type
            });

            return (
              <li className={toastClass} key={id} id={id}>
                <div className="toasts__item-type">
                  <ReactIcon className="toasts__type-icon" size="md">
                    {toastsTypeIcons[type]}
                  </ReactIcon>
                </div>

                {isLoading && <Loader />}

                <Typography className="toasts__item-message" variant="body3">
                  {message}
                </Typography>

                {!autohide && (
                  <ReactIcon
                    className="toasts__item-close-btn"
                    pointer
                    onClick={(): void => removeToast(id)}
                    size="xl"
                  >
                    <IoIosClose />
                  </ReactIcon>
                )}
              </li>
            );
          })}
        </ul>,
        document.body
      )
    : null;
}
