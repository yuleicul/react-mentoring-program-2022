import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import moviesReducer from './moviesSlice'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})

/**
 * Reference:
 * https://redux.js.org/usage/usage-with-typescript
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
