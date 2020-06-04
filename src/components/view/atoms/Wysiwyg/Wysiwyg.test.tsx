import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

import { Wysiwyg } from '../Wysiwyg';

describe('<Wysiwyg> atom component', () => {
  const handleBlur = jest.fn();

  let component: ReactTestRenderer;

  const createComponent = ({ onBlur, ...rest }: Record<string, any>) => {
    component = renderer.create(
      <Wysiwyg onBlur={onBlur} id="wysiwyg-test" {...rest} />
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent({ onBlur: handleBlur });
    });

    it('THEN it should render without crashing', () => {
      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
