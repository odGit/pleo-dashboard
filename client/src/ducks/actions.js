export const gotItems = (payload) => ({
  type: 'GOT_ITEMS',
  payload: payload,
  empty: false
})

export const gotNoItems = (payload) => ({
  type: 'GOT_NO_ITEMS',
  payload: payload,
  empty: true
})

export const failGet = (payload) => ({
  type: 'FAIL_TO_GET',
  payload: payload,
  empty: true
})

export const startReq = () => ({
  type: 'START_REQUEST'
})
