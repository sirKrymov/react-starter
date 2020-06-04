import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { AuthHeader } from '../AuthHeader';

describe('<AuthHeader> template sub component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = (): void => {
    shallowComponent = shallow(<AuthHeader />);
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
