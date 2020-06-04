import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

import { LinkButton } from '../LinkButton';

describe('<LinkButton> atom component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <BrowserRouter>
        <LinkButton to="test" id="test">
          Link Test
        </LinkButton>
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
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
