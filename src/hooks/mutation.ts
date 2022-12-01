import { useCallback, useState } from 'react'
import { Movie } from '../store/moviesSlice'

const API_SERVER = 'http://localhost:4000'

type MutationOptions = {
  onError?: (error: unknown) => void
  onSuccess?: () => void
}

export const useMutation = <T>(
  request: (data: T) => Promise<unknown>,
  options?: MutationOptions
): [typeof mutate, boolean] => {
  const { onError, onSuccess } = options || {}
  const [isLoading, setIsLoading] = useState(false)

  const mutate = useCallback(
    async (data: T) => {
      setIsLoading(true)
      try {
        await request(data)
        onSuccess?.()
      } catch (error) {
        onError?.(error)
      } finally {
        setIsLoading(false)
      }
    },
    [onError, onSuccess, request]
  )

  return [mutate, isLoading]
}

export const useSaveMovie = (options?: MutationOptions) => {
  return useMutation<Movie>(
    (data) =>
      fetch(`${API_SERVER}/movies`, {
        method: data.id ? 'PUT' : 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    options
  )
}

export const useDeleteMovie = (options?: MutationOptions) => {
  return useMutation<Pick<Movie, 'id'>>(
    (id: Pick<Movie, 'id'>) =>
      fetch(`${API_SERVER}/movies/${id}`, {
        method: 'DELETE',
      }),
    options
  )
}
