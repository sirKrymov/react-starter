// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { useState, useEffect, ReactElement } from 'react';

import { useDropzone } from 'react-dropzone';
import Downloader from 'js-file-downloader';
import Prettysize from 'prettysize';
import isImage from 'is-image';

import toBase64 from 'utils/toBase64';

import { ACCEPTED_IMAGE_FORMATS, IMAGE_MAX_SIZE } from 'constants/configs';

interface IProps {
  render(props: Record<string, any>): void;
  base64Image?: boolean;
  valueNames?: Record<string, any>;
  onChange: (files: Record<string, any>[] | null) => void;
  withFile?: boolean;
  minSize?: number;
  maxSize: number;
  accept?: Array<{
    displayName: string;
    format: string;
  }>;
  base64?: boolean;
  value: Array<any>;
}

interface INewFile {
  base64: unknown | string | undefined;
  file: File;
  name: string;
  size: number;
  id: number;
}

export function AttachRp({
  base64Image,
  valueNames,
  onChange,
  withFile,
  maxSize = IMAGE_MAX_SIZE,
  minSize = 1,
  accept = [...ACCEPTED_IMAGE_FORMATS],
  base64,
  render,
  value
}: IProps): ReactElement {
  const [files, setFiles] = useState<Record<string, any>[] | []>([]);
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    if (value) {
      let fileId = id;

      const sizeKey = (valueNames && valueNames.size) || 'size';

      const files = value.map((file: File) => ({
        name: file[(valueNames && valueNames.name) || 'name'],
        size:
          typeof file[sizeKey] === 'string'
            ? file[sizeKey]
            : Prettysize(file[sizeKey]),
        id: fileId++
      }));

      setId(fileId);
      setFiles(files);

      if (onChange) onChange(files);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value === null && files.length) setFiles([]);
  }, [value, files.length]);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: async (acceptedFiles, notAcceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        await addFile(file);
      } else if (notAcceptedFiles.length) {
        console.log('file error');
      }
    },
    ...(accept && { accept: accept.map(item => item.format).join(', ') }),
    noClick: true,
    minSize,
    maxSize,
    noDrag: true
  });

  function handleDelete(deletedId: string): void {
    const newFiles = [...files].filter(
      (item: Record<string, any>) => item.id !== deletedId
    );

    setFiles(newFiles);

    if (onChange) onChange(newFiles.length ? newFiles : null);
  }

  async function addFile(file: File): Promise<any> {
    const newFile = {
      name: file.name,
      size: Prettysize(file.size),
      id
    } as INewFile;

    if (base64) {
      const base64String = await toBase64(file);

      newFile.base64 = base64String;
    }

    if (base64Image && isImage(file.name)) {
      const base64String = await toBase64(file);

      newFile.base64 = base64String;
    }

    if (withFile) newFile.file = file;

    const newFiles = [...files, newFile];

    setFiles(newFiles);

    setId(id + 1);

    if (onChange) onChange(newFiles);
  }

  function downloadFile(url: string): void {
    new Downloader({
      filename: url,
      url
    })
      .then(function() {
        return;
      })
      .catch(function(err: string) {
        console.log(err);
      });
  }

  return (
    <div {...getRootProps()} style={{ outline: 'none' }}>
      <input {...getInputProps()} />

      {render({
        onDownload: downloadFile,
        onDelete: handleDelete,
        onOpen: open,
        files
      })}
    </div>
  );
}
