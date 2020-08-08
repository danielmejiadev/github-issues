// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useAutocomplete';

// Under test
import SearchInput from './index';

describe('SearchInput', () => {
  let component;
  const state = {
    search: 'search',
    suggestions: [],
  };

  beforeEach(() => {
    jest.spyOn(Hook, 'useAutocomplete').mockReturnValue(state);
    component = shallow(<SearchInput />)
  });

  it('should render correctly', () => {
    const { value, className } = component
      .find('input')
      .props();

    expect(value).toBe(state.search);
    expect(className).toBe('search-input');
  });
});
