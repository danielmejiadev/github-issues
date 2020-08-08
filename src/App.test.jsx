// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Components
import AutocompleteProvider from './components/AutocompleteProvider';
import SearchInput from './components/SearchInput';
import Suggestions from './components/Suggestions';

// Under test
import App from './App';

describe('Typeahead', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />)
  });

  it('should render correctly', () => {
    const provider = component
      .find(AutocompleteProvider)
      .exists();

    const input = component
      .find(SearchInput)
      .exists();

    const results = component
      .find(Suggestions)
      .exists();

    expect(provider).toBeTruthy();
    expect(input).toBeTruthy();
    expect(results).toBeTruthy();
  });
});