import {
  GET_RECEIPTS,
  POST_COMMENT,
  MODAL,
  POST_RECEIPT,
  TOGGLE_SAVE_BUTTON,
  SORT_DATA
} from './actionTypes'
import { SORTING_OPTIONS, dynamicSort } from '../utils/sortingFn'

export default function reducer (state, action) {
  console.log('REDUCER', action)
  switch (action.type) {
    case GET_RECEIPTS.SUCCESS: {
      const newData = action.payload.expenses
      return {
        ...state,
        // TODO: add sorting Action and TYPE of ACTION and REDUCER
        data: newData.sort(dynamicSort(state.sortBy)),
        total: action.payload.total
      }
    }
    case GET_RECEIPTS.NO_ITEMS: {
      return {
        ...state,
        data: action.payload
      }
    }
    case POST_RECEIPT.FAIL:
    case GET_RECEIPTS.FAIL: {
      return {
        ...state,
        errorMessage: action.payload.message
      }
    }
    case GET_RECEIPTS.START_REQUEST: {
      return {
        ...state,
        awaitingData: true
      }
    }
    case POST_COMMENT.START_REQUEST: {
      // TODO: is postingComment used?
      return {
        ...state,
        postingComment: { ...state.postingComment, ...action.payload }
      }
    }
    case POST_RECEIPT.SUCCESS:
    case POST_COMMENT.SUCCESS: {
      const index = state.data.findIndex(x => x.id === action.payload.id)
      const updatedData = [...state.data.slice(0, index), action.payload, ...state.data.slice(index + 1)]
      return {
        ...state,
        data: updatedData
      }
    }
    case MODAL.OPEN: {
      const expense = state.data.find(x => x.id === action.id)
      return {
        ...state,
        showModal: true,
        activeId: action.id,
        canSave: false,
        errorMessage: null,
        activeData: expense
      }
    }
    case MODAL.CLOSE: {
      return {
        ...state,
        showModal: false,
        activeId: null,
        canSave: false
      }
    }
    case POST_RECEIPT.START_REQUEST: {
      return {
        ...state,
        canSave: false,
        activeId: action.id
      }
    }
    case TOGGLE_SAVE_BUTTON: {
      return {
        ...state,
        canSave: action.payload
      }
    }
    case SORT_DATA: {
      const newArray = state.data.slice()
      return {
        ...state,
        sortBy: action.payload,
        data: newArray.sort(dynamicSort(action.payload))
      }
    }
    default: {
      return state
    }
  }
}
