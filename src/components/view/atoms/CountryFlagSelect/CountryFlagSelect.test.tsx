import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { CountryFlagSelect } from '../CountryFlagSelect';

describe('<CountryFlagSelect> atom component', () => {
  const handleSelect = jest.fn();

  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <CountryFlagSelect
        id="check-country-flag-select"
        onSelect={handleSelect}
      />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
