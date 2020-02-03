import { useEffect } from 'react'
import { useAppContext } from '../Context'
import { postComment } from './postComment'

export function usePostComment (shouldPost, newComment, comment, id) {
  const [, dispatch] = useAppContext()
  useEffect(() => {
    if (newComment !== comment) {
      postComment(newComment, id, dispatch)
    }
  }, [shouldPost])
}
