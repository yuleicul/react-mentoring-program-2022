/**
 * Because reducers are pure functions, so testing them should be straightforward.
 * Call the reducer with a specific input `state` and `action`, and assert that the result state matches expectations.
 * see https://redux.js.org/usage/writing-tests#reducers
 */

import reducer, { fetchMovieList } from './moviesSlice'

describe('moviesSlice', () => {
  test('initialState', () => {
    expect(
      reducer(undefined, {
        type: undefined,
        payload: undefined,
      })
    ).toEqual({
      data: [],
      totalAmount: 0,
    })
  })

  test('fetchMovieList.fulfilled ', () => {
    expect(
      reducer(undefined, {
        type: fetchMovieList.fulfilled,
        payload: {
          data: ['1', '2'],
          totalAmount: 2,
        },
      })
    ).toEqual({
      data: ['1', '2'],
      totalAmount: 2,
    })
  })
})
