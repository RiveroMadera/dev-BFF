/* eslint-disable no-undef */
/*
import React from 'react';
import { mount } from 'enzyme';
import Register from '../../containers/Register';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Register />', () => {
  test('Register Form', () => {
    const preventDefault = jest.fn();
    const register = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>
    );
    register.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    register.unmount()
  });
  
});
*/
import React from 'react';
import { create } from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProviderMock from '../../__mocks__/ProviderMock';
import Register from '../../containers/Register';

configure({ adapter: new Adapter() });

describe('Register container', () => {
  test('Match Snapshot', () => {
    const register = create(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    expect(register.toJSON()).toMatchSnapshot();
  });
  it('Calls and executes preventDefault function onSumit from', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>,
    );
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  })
});
