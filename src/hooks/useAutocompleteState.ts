// Dependencies
import React from 'react';

// Api
import githubClient from '../api/githubClient';

// Helpers
import { calculateSuggestions } from '../helpers';

// Models
import { IssueModel } from '../models/IssueModel';

// Hooks
import { useDebounceCallback } from './useDebounceCallback';

// Context
import { AutocompleteContext } from '../contexts/Autocomplete.context';

/**
 * Custom hook to generate the typeahead state required.
 * @returns { Object } The state and actions for given manager.
 */
export function useAutocompleteState(): AutocompleteContext {
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [suggestions, setSuggestions] = React.useState<IssueModel[]>([]);

  const debounceSearch = useDebounceCallback((query: string) => {
    if (query?.length > 3) {
      setLoading(true);
      return githubClient.issues
        .getRepoIssues('reactjs', 'reactjs.org', {
          params: {
            per_page: 100,
          }
        })
        .then((issues: IssueModel[]) => calculateSuggestions(issues, query))
        .then((issuesFiltered) => setSuggestions(issuesFiltered))
        .catch(setError)
        .finally(() => setLoading(false));
    }

    return setSuggestions([]);
  }, []);

  const onSearch = React.useCallback((event) => {
    const { target: { value } } = event;
    setSearch(value);
    debounceSearch(value);
  }, [debounceSearch]);

  return { search, onSearch, suggestions, loading, error };
}