import { addReceiptReq, addReceiptFail, addedReceipt } from '../ducks/actions'

export async function postReceipt (img, itemId, dispatch) {
  const url = `/expenses/${itemId}/receipts`
  const data = new FormData()
  data.append('receipt', img)

  dispatch(addReceiptReq(itemId))

  try {
    const request = await fetch(url, {
      method: 'POST',
      body: data
    })

    if (!request.ok) {
      throw new Error(
        `${request.status} ${request.statusText}`
      )
    }
    const response = await request.json()

    if (request.status === 200) {
      console.log('API CALL response', response)
      dispatch(addedReceipt(response))
    }
  } catch (err) {
    dispatch(addReceiptFail(err, itemId, img))
  }
}
