// Dependencies
import React from 'react';
import lodash from 'lodash';

export type CallbackParams = (...args: unknown[]) => void;

/**
 * A custom use callback hook to return a debounced function.
 * @param callback The callback to execute.
 * @param dependecies The dependencies to re rerun effect.
 * @param delay The debounce delay.
 * @returns The debounced callback.
 */
export function useDebounceCallback(
  callback: CallbackParams,
  dependecies: unknown[],
  delay = 400,
): CallbackParams & lodash.Cancelable {
  return React.useCallback(lodash.debounce(callback, delay), dependecies);
}