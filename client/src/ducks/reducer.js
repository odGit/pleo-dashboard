import { RECEIPT, COMMENT } from './actionTypes'

export default function reducer (state, action) {
  console.log('REDUCER', action)
  switch (action.type) {
    case RECEIPT.GOT_RECEIPTS_SUCESS: {
      return {
        ...state,
        data: action.payload.expenses,
        total: action.payload.total
      }
    }
    case RECEIPT.GOT_NO_ITEMS: {
      return {
        ...state,
        data: action.payload
      }
    }
    case RECEIPT.GET_FAIL: {
      return {
        ...state,
        errorMessage: action.payload.message
      }
    }
    case RECEIPT.GET_RECEIPTS_START_REQUEST: {
      return {
        ...state,
        awaitingData: true
      }
    }
    case COMMENT.POST_COMMENT_START_REQUEST: {
      return {
        ...state,
        postingComment: { ...state.postingComment, ...action.payload }
      }
    }
    case COMMENT.POSTED_COMMENT_SUCCESS: {
      const index = state.data.findIndex(x => x.id === action.payload.id)
      const updatedData = [...state.data.slice(0, index), action.payload, ...state.data.slice(index + 1)]
      return {
        ...state,
        data: updatedData
      }
    }
    default: {
      return state
    }
  }
}
