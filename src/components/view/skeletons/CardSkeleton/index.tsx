// @SETUP: Please don't forget to remove this component or current comment if component is used in project
import React, { ReactElement } from 'react';

import ContentLoader from 'react-content-loader';

export function CardSkeleton(): ReactElement {
  return (
    <ContentLoader
      foregroundColor="#f3f3f3"
      backgroundColor="#ecebeb"
      uniqueKey={`card-skeleton-uniquekey`}
      height={176}
      width={336}
      speed={2}
    >
      <rect x="0" y="5" rx="0" ry="0" width="105" height="18" />
      <rect x="0" y="35" rx="0" ry="0" width="159" height="27" />
      <rect x="0" y="105" rx="0" ry="0" width="335" height="50" />
      <rect x="0" y="163" rx="0" ry="0" width="41" height="15" />
      <rect x="295" y="163" rx="0" ry="0" width="41" height="15" />
    </ContentLoader>
  );
}
