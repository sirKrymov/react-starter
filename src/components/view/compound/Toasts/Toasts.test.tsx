import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import { Toasts } from '../Toasts';

describe('<Toasts> compound component', () => {
  const handleClick = sinon.spy();

  let shallowComponent: ShallowWrapper;

  const createComponent = (): void => {
    shallowComponent = shallow(
      <Toasts removeToast={handleClick} toastsState="" toasts={[]} />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).toBeNull;
    });

    it('THEN it should match snapshot', () => {
      expect(shallowToJson(shallowComponent)).toMatchSnapshot();
    });
  });
});
