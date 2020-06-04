import React, { ReactElement } from 'react';

import ReactPlayer from 'react-player';
import cn from 'classnames';

import './styles.scss';

interface IProps {
  url: string;
}

export function VideoPlayer({
  url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
}: IProps): ReactElement {
  const videoPlayerClass = cn({
    'video-player': true
  });

  return (
    <div className={videoPlayerClass}>
      <ReactPlayer
        controls
        height="auto"
        config={{
          youtube: {
            playerVars: { showinfo: 2 }
          }
        }}
        width="100%"
        url={url}
      />
    </div>
  );
}
