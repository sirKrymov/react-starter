import React, { useState, useEffect, ReactElement } from 'react';

import { IoMdCloudUpload, IoIosImage, IoIosTrash } from 'react-icons/io';
import { useDropzone } from 'react-dropzone';
import Prettysize from 'prettysize';
import classNames from 'classnames';
import isImage from 'is-image';

import { CropperComponent } from 'components/view/compound/Cropper';
import { VideoPlayer } from 'components/view/compound/VideoPlayer';
import { Typography } from 'components/view/atoms/Typography';
import { ReactIcon } from 'components/view/atoms/ReactIcon';
import { Modal } from 'components/view/compound/Modal';

import * as IMAGES from 'constants/images';
import {
  ACCEPTED_IMAGE_FORMATS,
  ACCEPTED_VIDEO_FORMATS,
  IMAGE_MAX_SIZE,
  VIDEO_MAX_SIZE
} from 'constants/configs';

import toBase64, { Base64 } from 'utils/toBase64';

import './styles.scss';

interface IProps {
  uploadVideoAction?(request: Record<string, any>): Record<string, any> | null;
  imageMaxSize?: number;
  imageMinSize?: number;
  videoMaxSize?: number;
  videoMinSize?: number;
  onLoadStart?(): void;
  onLoadEnd?(): void;
  imageOnly?: boolean;
  onChange?(value: Record<string, any> | string | null): void;
  isCropper?: boolean;
  accept?: {
    format: string;
    displayName: string;
  }[];
  error?: boolean;
  title?: string;
  value: string;
}

export function Upload({
  uploadVideoAction,
  imageMaxSize = IMAGE_MAX_SIZE,
  imageMinSize = 1,
  videoMaxSize = VIDEO_MAX_SIZE,
  videoMinSize = 1,
  onLoadStart,
  onLoadEnd,
  isCropper,
  imageOnly,
  onChange,
  accept = [...ACCEPTED_IMAGE_FORMATS, ...ACCEPTED_VIDEO_FORMATS],
  value,
  title,
  error
}: IProps): ReactElement {
  const DEFAULT_VIEW = 'default';
  const PREVIEW_VIEW = 'preview';
  const UPLOAD_VIEW = 'upload';
  const ERROR_VIEW = 'error';

  const [errorMess, setErrorMess] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [preview, setPreview] = useState<string | null>(null);
  const [cropper, setCropper] = useState<string | null>(null);
  const [view, setView] = useState<string>(DEFAULT_VIEW);

  useEffect(() => {
    if (value) {
      setPreview(value);
      setView(PREVIEW_VIEW);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: async (acceptedFiles, notAcceptedFiles) => {
      setErrorMess('');

      if (acceptedFiles.length) {
        // If file accept

        const file = acceptedFiles[0];

        if (!isImageFile(file) && imageOnly) {
          setView(ERROR_VIEW);
          return;
        }

        if (!isAcceptedSize(file)) {
          setView(ERROR_VIEW);
          return;
        }

        // Upload

        let base64: Base64 = null;
        let res: Record<string, any> | null = null;

        if (isCropper && isImageFile(file)) {
          base64 = await toBase64(file);
          typeof base64 === 'string' && setCropper(base64);

          return;
        }

        if (imageOnly) {
          base64 = await toBase64(file);
        } else {
          setView(UPLOAD_VIEW);

          if (onLoadStart) onLoadStart();

          try {
            if (uploadVideoAction) {
              res = uploadVideoAction({
                data: file,
                onUploadProgress: (value: number) => {
                  setProgress(value);
                }
              });
            }

            if (isImageFile(file)) {
              base64 = await toBase64(file);
            } else {
              base64 = IMAGES.krymovLogo;
            }
          } catch (err) {
            setErrorMess(err.file[0]);
            setView(ERROR_VIEW);

            return;
          } finally {
            setProgress(0);

            if (onLoadEnd) onLoadEnd();
          }
        }

        typeof base64 === 'string' && setPreview(base64);
        setView(PREVIEW_VIEW);

        if (onChange) onChange(res || base64);
      } else if (notAcceptedFiles.length) {
        setView(ERROR_VIEW);
      }
    },
    ...(accept && { accept: accept.map(item => item.format).join(', ') })
  });

  function isImageFile(file: Record<string, any>): boolean {
    return /^image/.test(file.type);
  }

  function isBase64(file: string): boolean {
    return /^data:/.test(file);
  }

  function isAcceptedSize(file: Record<string, any>): boolean {
    let result = false;

    if (isImageFile(file)) {
      if (file.size >= imageMinSize && file.size <= imageMaxSize) result = true;
    } else {
      if (file.size >= videoMinSize && file.size <= videoMaxSize) result = true;
    }

    return result;
  }

  function onCrop(base64: string): void {
    setPreview(base64);
    setView(PREVIEW_VIEW);
    setCropper(null);

    if (onChange) onChange(base64);
  }

  function handleDeleteButtonClick(): void {
    setPreview(null);
    setView(DEFAULT_VIEW);

    if (onChange) onChange(null);
  }

  const uploadClass = classNames({
    upload: true,
    [`upload--view-${view}`]: view,
    'upload--active': isDragActive,
    'upload--error': error
  });

  return (
    <>
      <div {...getRootProps()} style={{ outline: 'none' }}>
        <input {...getInputProps()} />

        <div className={uploadClass}>
          {view === DEFAULT_VIEW && (
            <div className="upload__view">
              <ReactIcon className="upload__icon" size="xxl" color="primary">
                <IoIosImage />
              </ReactIcon>

              <div className="upload__title">
                <Typography variant="subtitle2">
                  {title || 'Drop an Image/Video here or select file.'}
                </Typography>
              </div>

              <div className="upload__description">
                <Typography variant="body3">
                  Image:{' '}
                  {ACCEPTED_IMAGE_FORMATS.map(item => item.displayName).join(
                    ', '
                  )}
                  . Max size {Prettysize(imageMaxSize)}.
                </Typography>
              </div>

              {!imageOnly && (
                <div className="upload__description">
                  <Typography variant="body3">
                    Video:{' '}
                    {ACCEPTED_VIDEO_FORMATS.map(item => item.displayName).join(
                      ', '
                    )}
                    . Max size {Prettysize(videoMaxSize)}.
                  </Typography>
                </div>
              )}
            </div>
          )}

          {view === UPLOAD_VIEW && (
            <div className="upload__view">
              <div className="upload__title">
                <Typography variant="body2">Processing</Typography>
              </div>

              <div className="upload__progress">
                <div style={{ width: `${progress}%` }} />
              </div>

              <div className="upload__description">
                <Typography variant="body3">
                  Feel free to move on- your video will appear here when oit is
                  ready.
                </Typography>
              </div>
            </div>
          )}

          {view === ERROR_VIEW && (
            <div className="upload__view">
              <div className="upload__title">
                <Typography variant="body3">
                  Oops, Upload failed.
                  <Typography color="error" variant="body3" component="span">
                    Try again?
                  </Typography>
                </Typography>
              </div>

              <div className="upload__description">
                <Typography variant="body3" color="error">
                  {errorMess ||
                    'Oh no, there is some error in uploading. Please try again.'}
                </Typography>
              </div>

              <div className="upload__description">
                <Typography variant="body3">
                  Image:{' '}
                  {ACCEPTED_IMAGE_FORMATS.map(item => item.displayName).join(
                    ', '
                  )}
                  . Max size {Prettysize(imageMaxSize)}.
                </Typography>
              </div>

              {!imageOnly && (
                <div className="upload__description">
                  <Typography variant="body3">
                    Video:{' '}
                    {ACCEPTED_VIDEO_FORMATS.map(item => item.displayName).join(
                      ', '
                    )}
                    . Max size
                    {Prettysize(videoMaxSize)}.
                  </Typography>
                </div>
              )}
            </div>
          )}

          {view === PREVIEW_VIEW && (
            <div className="upload__preview" onClick={e => e.stopPropagation()}>
              <div className="upload__preview-buttons">
                <ReactIcon pointer onClick={open} color="on-primary" size="lg">
                  <IoMdCloudUpload />
                </ReactIcon>
                <ReactIcon
                  pointer
                  onClick={handleDeleteButtonClick}
                  color="on-primary"
                  size="lg"
                >
                  <IoIosTrash />
                </ReactIcon>
              </div>

              {preview ? (
                isBase64(preview) || isImage(preview) ? (
                  <img src={preview || ''} alt="preview" />
                ) : (
                  <VideoPlayer url={preview} />
                )
              ) : null}
            </div>
          )}
        </div>
      </div>

      <Modal width="sm" onClose={(): void => setCropper(null)} open={!!cropper}>
        <CropperComponent onCrop={onCrop} src={cropper || ''} id="upload" />
      </Modal>
    </>
  );
}
