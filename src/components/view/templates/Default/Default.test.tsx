import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { DefaultTemplate } from '../Default';

describe('<Default> template component', () => {
  let shallowComponent: ShallowWrapper;

  const createShallowComponent = () => {
    shallowComponent = shallow(
      <DefaultTemplate>
        <div>Test</div>
      </DefaultTemplate>
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createShallowComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(shallowComponent.html()).not.toHaveLength(0);
    });

    it('THEN it should match snapshot', () => {
      expect(shallowComponent).toMatchSnapshot();
    });
  });
});
