import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';

import { AuthTemplate } from '../Auth';

describe('<Default> template component', () => {
  let shallowComponent: ShallowWrapper;

  const createShallowComponent = () => {
    shallowComponent = shallow(
      <AuthTemplate>
        <div>Test</div>
      </AuthTemplate>
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
