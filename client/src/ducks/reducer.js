import { RECEIPT, COMMENT, MODAL, POST_RECEIPT } from './actionTypes'

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
    case POST_RECEIPT.FAIL:
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
      // TODO: is postingComment used?
      return {
        ...state,
        postingComment: { ...state.postingComment, ...action.payload }
      }
    }
    case POST_RECEIPT.SUCCESS:
    case COMMENT.POSTED_COMMENT_SUCCESS: {
      const index = state.data.findIndex(x => x.id === action.payload.id)
      const updatedData = [...state.data.slice(0, index), action.payload, ...state.data.slice(index + 1)]
      return {
        ...state,
        data: updatedData
      }
    }
    case MODAL.OPEN: {
      return {
        ...state,
        showModal: true,
        activeItem: action.id
      }
    }
    case MODAL.CLOSE: {
      // TODO: reset Inner modal state
      return {
        ...state,
        showModal: false,
        activeItem: null,
        canSave: false
      }
    }
    case POST_RECEIPT.START_REQUEST: {
      return {
        ...state,
        canSave: false,
        activeItem: action.id
      }
    }
    default: {
      return state
    }
  }
}
