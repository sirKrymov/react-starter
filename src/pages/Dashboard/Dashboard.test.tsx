import React from 'react';

import renderer, { ReactTestRenderer } from 'react-test-renderer';

import { DashboardPage } from '../Dashboard';
import { BrowserRouter } from 'react-router-dom';

describe('<Dashboard> page component', () => {
  let component: ReactTestRenderer;

  const createComponent = () => {
    component = renderer.create(
      <BrowserRouter>
        <DashboardPage />
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
