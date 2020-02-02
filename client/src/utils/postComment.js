import { addCommentReq, addedComment, addCommentFail } from '../ducks/actions'

export async function postComment (text, itemId, dispatch) {
  const url = `/expenses/${itemId}`
  const formData = new FormData()
  formData.append('comment', text)

  dispatch(addCommentReq(itemId, text))

  try {
    const request = await fetch(url, {
      method: 'POST',
      body: formData
    })
    if (!request.ok) {
      throw new Error(
        `${request.status} ${request.statusText}`
      )
    }

    const response = await request.json()

    if (request.status === 200) {
      dispatch(addedComment(response))
    }
  } catch (err) {
    dispatch(addCommentFail(err, itemId, text))
  }
}
