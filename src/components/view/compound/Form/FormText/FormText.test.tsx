import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Typography } from '../../../atoms/Typography';
import { FormText } from '../FormText';

describe('<FormText> compound component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(<FormText text="Check text" {...props} />);
  };

  describe('WHEN the component loads without prop "type', () => {
    createComponent();

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.find(Typography).prop('variant')).toEqual(
        'body2'
      );
    });
  });

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ type: 'title' });
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
