import {
  API_SERVER,
  fetchMovieListParams,
  fetchMovieListResponse,
  Movie,
} from '../store/moviesSlice'

export const getMovieList = (
  params: fetchMovieListParams
): Promise<fetchMovieListResponse> => {
  return fetch(
    `${API_SERVER}/movies?sortBy=${params.sortBy}&sortOrder=desc&search=${params.search}&searchBy=title&filter=${params.filter}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err))
}

export const getMovie = (id: number): Promise<Movie> => {
  return fetch(`${API_SERVER}/movies/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err))
}
