import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Typography } from '../Typography';

describe('<Typography> atom component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(
      <Typography {...props}>text for test</Typography>
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

  describe('WHEN the component have different props', () => {
    it('WHEN component have prop component="div"', () => {
      createComponent({ component: 'div' });

      expect(shallowComponent.find('div.typography')).toHaveLength(1);
    });

    it('WHEN component have paragraph prop', () => {
      createComponent({ paragraph: true });

      expect(shallowComponent.find('p.typography')).toHaveLength(1);
    });

    it('WHEN component have prop variant="h1"', () => {
      createComponent({ variant: 'h1' });

      expect(shallowComponent.find('h1.typography')).toHaveLength(1);
    });

    it('WHEN component have prop isCapitalize', () => {
      createComponent({ isCapitalize: true });

      expect(shallowComponent.prop('children')).toEqual('Text for test');
    });
  });
});
