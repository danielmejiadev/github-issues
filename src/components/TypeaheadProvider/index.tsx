// Dependencies
import React from 'react';

// Hooks
import { useTypeaheadState } from '../../hooks/useTypeaheadState';

// Context
import { TypeaheadContext } from '../../contexts/Typeahead.context';

export interface TypeaheadProviderProps {
  children: React.ReactNode;
}

export function TypeaheadProvider({ children }: TypeaheadProviderProps) {
  const { search, onSearch, suggestions } = useTypeaheadState();

  return (
    <TypeaheadContext.Provider value={{ search, onSearch, suggestions }}>
      {children}
    </TypeaheadContext.Provider>
  )
}

export default TypeaheadProvider;