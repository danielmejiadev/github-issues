// Under test
import * as Helpers from './index';

describe('Helpers', () => {
  it('should sanitize value', () => {
    expect(Helpers.sanitize('  VALUE ')).toBe('value');
  });

  it('should calculate suggestions for a given list and query', () => {
    const list = [
      {
        title: 'Issue',
        labels: [],
      },
      {
        title: 'Another',
        labels: [
          {
            name: 'Issue',
          }
        ]
      },
      {
        title: 'Another one',
        labels: [
          {
            name: 'other',
          }
        ]
      }
    ];
    const query = 'issu';
    expect(Helpers.calculateSuggestions(list, query)).toEqual([
      {
        title: 'Issue',
        labels: [],
      },
      {
        title: 'Another',
        labels: [
          {
            name: 'Issue',
          }
        ]
      },
    ])

  });
});
