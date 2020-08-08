// Dependencies
import React, { ChangeEvent } from 'react'

// Models
import { IssueModel } from '../models/IssueModel';

export interface AutocompleteContext {
  search: string;
  suggestions: IssueModel[];
  onSearch: (event: ChangeEvent) => void;
}

export const AutocompleteContext = React.createContext({} as AutocompleteContext);