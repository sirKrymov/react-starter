import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { FormBlock } from '../FormBlock';
import { Button } from '../../../atoms/Button';

describe('<FormBlock> compound component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <FormBlock>
        <Button id="test">Test</Button>
      </FormBlock>
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
