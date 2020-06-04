import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { UnauthorizedPage } from '../Unauthorized';

describe('<Unauthorized> page component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <BrowserRouter>
        <UnauthorizedPage />
      </BrowserRouter>
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
      expect(shallowComponent).toMatchSnapshot();
    });
  });
});
