// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useTypeaheadState';

// Under test
import TypeaheadProvider from './index';

describe('TypeaheadProvider', () => {
  let component;
  const props = {
    children: <div></div>
  };
  const state = {
    search: 'value',
    onSearch: jest.fn(),
    suggestions: [],
  }

  beforeEach(() => {
    jest.spyOn(Hook, 'useTypeaheadState').mockReturnValue(state);
    component = shallow(<TypeaheadProvider {...props} />)
  });

  afterEach(() => {
    expect(Hook.useTypeaheadState).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const { value } = component.props();

    expect(value).toEqual(state);
  });
});
