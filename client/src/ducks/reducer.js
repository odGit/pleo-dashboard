import {
  GET_RECEIPTS,
  POST_COMMENT,
  MODAL,
  POST_RECEIPT,
  TOGGLE_SAVE_BUTTON,
  SORT_DATA,
  SELECT_CARDS,
  CHANGE_PAGE
} from './actionTypes'
import { dynamicSort } from '../utils/sortingFn'

export default function reducer (state, action) {
  switch (action.type) {
    case GET_RECEIPTS.SUCCESS: {
      const newData = action.payload.expenses
      return {
        ...state,
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
    case SELECT_CARDS: {
      let newSelect = state.select.slice()
      if (action.checked) {
        newSelect.push(action.payload)
      } else {
        newSelect = newSelect.filter(item => item !== action.payload)
      }
      return {
        ...state,
        select: newSelect
      }
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        offsetSize: state.offsetSize + (action.payload * state.limit)
      }
    }
    default: {
      return state
    }
  }
}
