import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

import { NewPasswordPage } from '../NewPassword';

describe('<NewPassword> page component', () => {
  let shallowComponent: ShallowWrapper;

  const createComponent = () => {
    shallowComponent = shallow(
      <BrowserRouter>
        <NewPasswordPage history={createBrowserHistory()} />
      </BrowserRouter>
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
      expect(shallowComponent).toMatchSnapshot();
    });
  });
});
