import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { BreadCrumbs } from '../BreadCrumbs';

describe('<CardWrapper> compound component', () => {
  let component: ReactTestRenderer;

  const list = [
    {
      label: 'Test one',
      to: '/to-test-one'
    },
    {
      label: 'Test two',
      to: '/to-test-two'
    }
  ];

  const createComponent = () => {
    component = renderer.create(
      <BrowserRouter>
        <BreadCrumbs list={list} listId="test-id" />
      </BrowserRouter>
    );
  };

  describe('WHEN the component loads', () => {
    beforeEach(() => {
      createComponent();
    });

    it('THEN it should render without crashing', () => {
      expect(component.toJSON()).toBeDefined();
    });

    it('THEN it should match snapshot', () => {
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
