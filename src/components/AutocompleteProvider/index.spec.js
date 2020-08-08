// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useAutocompleteState';

// Under test
import AutocompleteProvider from './index';

describe('AutocompleteProvider', () => {
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
    component = shallow(<AutocompleteProvider {...props} />)
  });

  afterEach(() => {
    expect(Hook.useTypeaheadState).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const { value } = component.props();

    expect(value).toEqual(state);
  });
});
