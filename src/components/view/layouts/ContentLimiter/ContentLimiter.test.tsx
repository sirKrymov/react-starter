import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ContentLimiter } from '../ContentLimiter';

describe('<ContentLimiter> layout component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = (): void => {
    shallowComponent = shallow(
      <ContentLimiter>
        <div>Test component</div>
      </ContentLimiter>
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
