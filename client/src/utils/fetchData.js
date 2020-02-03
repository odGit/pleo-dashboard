import { gotItems, gotNoItems, getItemsReq, getItemsFail } from '../ducks/actions'

export async function fetchData (limit, offsetSize, dispatch, fetchParams = {}) {
  const url = `/expenses?limit=${limit}&offset=${offsetSize}`
  dispatch(getItemsReq())
  try {
    const request = await fetch(url, fetchParams)
    if (!request.ok) {
      throw new Error(
        `${request.status} ${request.statusText}`
      )
    }
    const content = await request.text()
    if (content.length > 0) {
      dispatch(gotItems(JSON.parse(content)))
    }
    if (content.length === 0) {
      dispatch(gotNoItems({ status: request.statusText, expenses: [] }))
    }
  } catch (err) {
    dispatch(getItemsFail(err))
  }
}
