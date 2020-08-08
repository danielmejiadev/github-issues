// Dependencies
import React from 'react';

// Components
import AutocompleteProvider from './components/AutocompleteProvider';
import SearchInput from './components/SearchInput';
import Suggestions from './components/Suggestions';

// Assets
import logo from "./logo.svg";

export function App() {
  return (
    <AutocompleteProvider>
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1>React Github Issues</h1>
        </header>
        <SearchInput />
        <Suggestions />
      </div>
    </AutocompleteProvider>
  )
}

export default App;
