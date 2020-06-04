/* eslint-disable @typescript-eslint/no-non-null-assertion */
// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add components tests
import React, { useRef, RefObject, ReactElement } from 'react';

import Cropper from 'react-cropper';

import { Button } from '../../atoms/Button';

import './styles.scss';

interface IProps {
  onCrop(value: string): void;
  src: string;
  id: string;
}

export function CropperComponent({ onCrop, src, id }: IProps): ReactElement {
  const cropper: RefObject<Cropper> = useRef(null);

  function cropImage(): void {
    if (typeof cropper!.current?.getCroppedCanvas() === 'undefined') {
      return;
    }

    onCrop(cropper!.current?.getCroppedCanvas().toDataURL());
  }

  return (
    <div className="cropper">
      <Cropper
        zoomable={false}
        movable={false}
        guides={false}
        style={{ height: '100%', width: '100%' }}
        ref={cropper}
        src={src}
      />

      <div className="cropper__buttons">
        <Button onClick={cropImage} id={`cropper-${id}-save-button`}>
          Save
        </Button>
      </div>
    </div>
  );
}
