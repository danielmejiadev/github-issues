// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useAutocomplete';

// Under test
import Suggestions from './index';

describe('Suggestions', () => {
  let component;
  const issue = {
    id: 1,
    html_url: 'http://link',
    number: 10,
    title: 'Issue',
    labels: [
      {
        id: 1,
        name: 'issue label',
      }
    ],
  };
  const state = {
    suggestions: [issue],
  };

  beforeEach(() => {
    jest.spyOn(Hook, 'useAutocomplete').mockReturnValue(state);
    component = shallow(<Suggestions />)
  });

  it('should render correctly', () => {
    const { children: link } = component
      .find('li')
      .first()
      .props();

    const { href, children } = link.props;
    const [title, labels, numberIssue] = children;

    expect(title.props.children).toBe('Issue');
    expect(labels).toBeTruthy();
    expect(numberIssue.props.children).toBe('#10');
    expect(href).toBe(issue.html_url);
  });

  it('should render null', () => {
    jest.spyOn(Hook, 'useAutocomplete').mockReturnValue({ ...state, suggestions: [] });
    component.setProps({});
    expect(component.html()).toBeNull();
  });
});
