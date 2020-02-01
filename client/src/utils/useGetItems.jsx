import { useEffect } from 'react'
import { fetchData } from './fetchData'
import { useAppContext } from '../Context'

export function useGetItems (limit, offsetSize) {
  const [, dispatch] = useAppContext()
  useEffect(() => {
    const abortController = new AbortController()
    fetchData(limit, offsetSize, dispatch, { signal: abortController.signal })
    return () => {
      abortController.abort()
    }
  }, [limit, offsetSize])
}
