// Dependencies
import React from 'react';

// Context
import { TypeaheadContext } from '../../contexts/Autocomplete.context';

// Under test
import { useTypeahead } from '../useAutocomplete';

describe('UseTypeaheadHook', () => {
  it('should use typeahead hook', () => {
    const state = {};
    jest.spyOn(React, 'useContext').mockReturnValue(state);

    const response = useTypeahead();
    expect(response).toEqual(state);
    expect(React.useContext).toHaveBeenCalledWith(TypeaheadContext);
  });
});
