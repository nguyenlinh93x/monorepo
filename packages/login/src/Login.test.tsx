import { mount } from 'enzyme';
import * as React from 'react';

import { LoginForm } from './Login';

jest.mock('@test/input', () => ({ Input: 'input' }));

describe('LoginForm', () => {
  test('should match snapshot and styles', () => {
    expect(mount(<LoginForm />)).toMatchSnapshot();
  });
});