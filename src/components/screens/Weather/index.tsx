import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Loader } from 'components/view/atoms/loaders/Loader';

import { useStores } from 'hooks/useStores';

export const WeatherScreen = observer(() => {
  const { weatherStore } = useStores();

  useEffect(() => {
    weatherStore.getForecast({
      lat: '47.8228900',
      lon: '35.1903100'
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Weather forecast</p>

      {weatherStore.fetching && <Loader />}
    </div>
  );
});
