import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

export const API_SERVER = 'http://localhost:4000'

export interface Movie {
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget: number
  revenue: number
  runtime: number
  genres: string[]
  id: number
}

export interface fetchMovieListResponse {
  data: Movie[]
  totalAmount: number
}

export interface fetchMovieListParams {
  sortBy: string
  search: string
  filter: string
}

export const fetchMovieList = createAsyncThunk(
  'movies/fetchMovieList',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (params: fetchMovieListParams, { dispatch, getState }) => {
    const response = await fetch(
      `${API_SERVER}/movies?sortBy=${params.sortBy}&sortOrder=desc&search=${params.search}&searchBy=title&filter=${params.filter}`
    )
    const data: fetchMovieListResponse = await response.json()
    return data
  }
)

const initialState: fetchMovieListResponse = {
  data: [],
  totalAmount: 0,
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.fulfilled, (_state, action) => {
      return action.payload
    })
  },
})

export const selectAll = (state: RootState) => state.movies

export default moviesSlice.reducer
