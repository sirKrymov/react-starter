import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { Loader } from '../loaders/Loader';
import { Button } from '../Button';

describe('<Button> atom component', () => {
  const handleClick = sinon.spy();

  let shallowComponent: ShallowWrapper;

  const createComponent = (props?: Record<string, any>) => {
    shallowComponent = shallow(
      <Button onClick={handleClick} id="button" {...props}>
        Test
      </Button>
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match initial snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot('Initial');
    });

    it('AND it should handle initial button logic', () => {
      shallowComponent.find('button').simulate('click');
      expect(handleClick).toHaveProperty('callCount', 1);
    });
  });

  describe('WHEN the component have loading proccess', () => {
    beforeEach(() => {
      createComponent({ loading: true });
    });

    it('THEN it should match snapshot with loading', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot('With loading');
    });

    it('AND it should show loading component', () => {
      expect(shallowComponent.find('button.button--loading')).toHaveLength(1);
      expect(shallowComponent.find(Loader)).toBeDefined();
    });
  });

  describe('WHEN the component have disabled status', () => {
    it('AND it should disable button if it contains disabled props', () => {
      createComponent({ disabled: true });

      expect(shallowComponent.find('button.button--disabled')).toHaveLength(1);
      shallowComponent.find('button').simulate('click');
      handleClick.calledOnceWith(undefined);
    });
  });
});
