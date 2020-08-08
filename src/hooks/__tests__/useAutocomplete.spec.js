// Dependencies
import React from 'react';

// Context
import { AutocompleteContext } from '../../contexts/Autocomplete.context';

// Under test
import { useAutocomplete } from '../useAutocomplete';

describe('UseAutoComplete', () => {
  it('should use autocomplete hook', () => {
    const state = {};
    jest.spyOn(React, 'useContext').mockReturnValue(state);

    const response = useAutocomplete();
    expect(response).toEqual(state);
    expect(React.useContext).toHaveBeenCalledWith(AutocompleteContext);
  });
});
