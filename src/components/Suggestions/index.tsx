// Dependencies
import React from 'react';

// Hooks
import { useAutocomplete } from '../../hooks/useAutocomplete';

// Stylesz
import './styles.css'

export function Suggestions() {
  const { suggestions, error } = useAutocomplete();

  if (error) {
    return <p>There was an error, please try again</p>
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggestions">
      <ul role="tablist">
        {suggestions.map((issue) => (
          <li
            role="tab"
            key={issue.id}
            tabIndex={0}
          >
            <a
              tabIndex={-1}
              className="issue-container"
              href={issue.html_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h4>{issue.title}</h4>
              <div className="labels-container">
                {
                  issue.labels.map((label) => <p className="issue-label" key={label.id}>{label.name}</p>)
                }
              </div>
              <p>{`#${issue.number}`}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Suggestions;