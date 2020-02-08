import {
  GET_RECEIPTS,
  POST_COMMENT,
  MODAL, POST_RECEIPT,
  TOGGLE_SAVE_BUTTON,
  SORT_DATA,
  SELECT_CARDS,
  CHANGE_PAGE
} from './actionTypes'

//   GET items
export const getItemsReq = () => ({
  type: GET_RECEIPTS.START_REQUEST
})

export const gotItems = (payload) => ({
  type: GET_RECEIPTS.SUCCESS,
  payload: payload
  // empty: false
})

export const gotNoItems = (payload) => ({
  type: GET_RECEIPTS.NO_ITEMS,
  payload: payload
  // empty: true
})

export const getItemsFail = (payload) => ({
  type: GET_RECEIPTS.FAIL,
  payload: payload
  // empty: true
})

//    POST Comment
export const addCommentReq = (id, text) => ({
  type: POST_COMMENT.START_REQUEST,
  payload: { [id]: text }
})

export const addedComment = (payload) => ({
  type: POST_COMMENT.SUCCESS,
  payload: payload
})

export const addCommentFail = (error, itemId, text) => ({
  type: POST_COMMENT.FAIL,
  error: error,
  id: itemId,
  payload: text
})

//    Toggle Modal
export const openModal = (id, hasReceipts) => ({
  type: MODAL.OPEN,
  id: id,
  hasReceipts: hasReceipts
})

export const closeModal = () => ({
  type: MODAL.CLOSE
})

//   POST receipts
export const addReceiptReq = () => ({
  type: POST_RECEIPT.START_REQUEST,
  canSave: false
})

export const addedReceipt = (payload) => ({
  type: POST_RECEIPT.SUCCESS,
  payload: payload
})

export const addReceiptFail = (error) => ({
  type: POST_RECEIPT.FAIL,
  error: error,
  canSave: true
})

export const toggleSaveBtn = (payload) => ({
  type: TOGGLE_SAVE_BUTTON,
  payload
})

export const applySorting = (payload) => ({
  type: SORT_DATA,
  payload
})

export const applySelect = (payload, checked) => ({
  type: SELECT_CARDS,
  payload,
  checked
})

export const changePage = (payload) => ({
  type: CHANGE_PAGE,
  payload
})
