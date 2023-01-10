import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import moviesReducer from './moviesSlice'

// Reference: https://redux.js.org/usage/writing-tests#example-app-code
const rootReducer = combineReducers({
  movies: moviesReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

/**
 * Reference:
 * https://redux.js.org/usage/usage-with-typescript
 */
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default setupStore()
