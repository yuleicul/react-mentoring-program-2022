import { useCallback, useEffect, useState } from 'react'

/**
 * @param fetcher
 * @returns [data, isLoading, error]
 */
const useFetch = <T>(
  fetcher: () => Promise<T>
): [T | undefined, boolean, unknown] => {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()

  const fetch = useCallback(async () => {
    setIsLoading(true)

    try {
      const newData = await fetcher()
      setData(newData)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [fetcher])

  useEffect(() => {
    fetch()
  }, [fetch])

  return [data, isLoading, error]
}

export default useFetch
