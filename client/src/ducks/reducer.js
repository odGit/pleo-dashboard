export default function reducer (state, action) {
  console.log('REDUCER', action)
  switch (action.type) {
    case 'GOT_ITEMS': {
      console.log('REDUCER GOT ITEMS', action.payload)
      return {
        ...state,
        data: action.payload.expenses,
        total: action.payload.total
      }
    }
    case 'GOT_NO_ITEMS': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'FAIL_TO_GET': {
      return {
        ...state,
        errorMessage: action.payload.message
      }
    }
    case 'START_REQUEST': {
      return {
        ...state,
        awaitingData: true
      }
    }
    case 'POST_NEW_COMMENT': {
      // TODO: needs to update LOCAL STATE AND DB
      return {
        ...state,

      }
    }
    default: {
      return state
    }
  }
}
