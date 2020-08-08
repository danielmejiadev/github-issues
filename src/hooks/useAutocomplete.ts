// Dependencies
import React from 'react';

// Context
import { AutocompleteContext } from '../contexts/Autocomplete.context';

/**
 * Custom hook to use the typehead context around the app.
 * @returns { Object } The state and actions for given provider.
 */
export function useAutocomplete(): AutocompleteContext {
  return React.useContext(AutocompleteContext)
}
