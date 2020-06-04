// @SETUP: Please don't forget to remove this component or current comment if component is used in project
// @TODO: Add component tests
import React, { Component, ReactNode, ReactElement } from 'react';

import Swiper, { SwiperModule } from 'swiper';
import cn from 'classnames';

interface IProps {
  className?: string;
  children: ReactNode;
  params?: Record<string, any> | {};
  init: (swiper: SwiperModule) => void;
}

export class Slider extends Component<IProps> {
  componentDidMount(): void {
    const { params, init } = this.props;
    const swiperInit = new Swiper('.swiper-container', { ...params });

    init(swiperInit);
  }

  render(): ReactElement {
    const { className, children } = this.props;

    const swiperContainerClass = cn(
      {
        'swiper-container': true
      },
      className
    );

    return (
      <div className={swiperContainerClass}>
        <div className="swiper-wrapper">{children}</div>
        <div className="swiper-pagination" />
      </div>
    );
  }
}
