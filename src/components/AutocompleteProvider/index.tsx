// Dependencies
import React from 'react';

// Hooks
import { useAutocompleteState } from '../../hooks/useAutocompleteState';

// Context
import { AutocompleteContext } from '../../contexts/Autocomplete.context';

export interface AutocompleteProvider {
  children: React.ReactNode;
}

export function AutocompleteProvider({ children }: AutocompleteProvider) {
  const { search, onSearch, suggestions } = useAutocompleteState();

  return (
    <AutocompleteContext.Provider value={{ search, onSearch, suggestions }}>
      {children}
    </AutocompleteContext.Provider>
  )
}

export default AutocompleteProvider;