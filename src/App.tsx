// Dependencies
import React from 'react';

// Components
import AutocompleteProvider from './components/AutocompleteProvider';
import SearchInput from './components/SearchInput';
import Suggestions from './components/Suggestions';

export function App() {
  return (
    <AutocompleteProvider>
      <div className="container">
        <SearchInput />
        <Suggestions />
      </div>
    </AutocompleteProvider>
  )
}

export default App;
