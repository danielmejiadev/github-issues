// Dependencies
import React from 'react';

// Context
import { TypeaheadContext } from '../contexts/Typeahead.context';

/**
 * Custom hook to use the typehead context around the app.
 * @returns { Object } The state and actions for given provider.
 */
export function useTypeahead() {
  return React.useContext(TypeaheadContext)
}
