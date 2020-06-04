import React, { Component, ReactElement } from 'react';

import GoogleMapReact, { Props as GoogleMapProps } from 'google-map-react';
import cn from 'classnames';

import './styles.scss';

interface IProps extends GoogleMapProps {
  className?: string;
}

export class GoogleMap extends Component<IProps> {
  static defaultProps = {
    center: {
      lat: 51.509865,
      lng: 0.118092
    },
    zoom: 11
  };

  render(): ReactElement {
    const { className } = this.props;

    const mapContainerClass = cn(
      {
        'google-map-container': true
      },
      className
    );

    return (
      <div className={mapContainerClass}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: 'AIzaSyCbs-XMwgWbTNJsBHF2bPt9FxUqMSN8it8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}
