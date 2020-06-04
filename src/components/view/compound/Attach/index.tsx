import React, { CSSProperties, ReactElement } from 'react';

import { IoIosClose, IoIosAttach } from 'react-icons/io';
import cn from 'classnames';

import { Typography } from '../../atoms/Typography';
import { ReactIcon } from '../../atoms/ReactIcon';

import './styles.scss';

interface IProps {
  backgroundColor?: 'primary' | 'secondary';
  disablePadding?: boolean;
  onDownload?(name: string): void;
  readOnly?: boolean;
  onDelete(id: number): void;
  onOpen(): void;
  style?: CSSProperties;
  limit?: number;
  title?: string;
  files: {
    name: string;
    size: string;
    id: number;
  }[];
}

export function Attach({
  backgroundColor = 'primary',
  disablePadding,
  onDownload,
  readOnly,
  onDelete,
  onOpen,
  style,
  title = 'Attach files',
  limit = 100,
  files = []
}: IProps): ReactElement {
  const attachClass = cn({
    attach: true,
    'attach--disable-padding': disablePadding,
    [`attach--bg-color-${backgroundColor}`]: backgroundColor
  });
  const attachButtonClass = cn({
    [`attach__button`]: true,
    'attach__button--disabled': files.length === limit
  });

  return (
    <div className={attachClass} style={style}>
      <div className="attach__header">
        <div className="attach__title">
          <Typography variant="body2">{title}</Typography>
        </div>

        {!readOnly && (
          <div
            className={attachButtonClass}
            onClick={files.length < limit ? onOpen : undefined}
          >
            <ReactIcon className="attach__button-icon" size="md">
              <IoIosAttach />
            </ReactIcon>

            <Typography variant="body3">Attach</Typography>
          </div>
        )}
      </div>

      {!!files.length && (
        <ul className="attach__list">
          {files.map(file => (
            <li
              className="attach__list-item"
              key={file.id}
              {...(onDownload && {
                onClick: (): void => onDownload(file.name),
                style: { cursor: 'pointer' }
              })}
            >
              <ReactIcon className="attach__list-item-icon" size="md">
                <IoIosAttach />
              </ReactIcon>

              <div className="attach__list-item-name" title={file.name}>
                <Typography variant="body2">{file.name}</Typography>
              </div>

              <span className="attach__list-item-size">
                <Typography variant="body2">{file.size} </Typography>
              </span>

              {!readOnly && (
                <ReactIcon
                  className="attach__list-item-del"
                  onClick={(): void => onDelete(file.id)}
                  size="lg"
                >
                  <IoIosClose />
                </ReactIcon>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
