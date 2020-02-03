import { RECEIPT, COMMENT, MODAL, POST_RECEIPT } from './actionTypes'

export const gotItems = (payload) => ({
  type: RECEIPT.GOT_RECEIPTS_SUCESS,
  payload: payload,
  empty: false
})

export const gotNoItems = (payload) => ({
  type: RECEIPT.GOT_NO_ITEMS,
  payload: payload,
  empty: true
})

export const failGet = (payload) => ({
  type: RECEIPT.GET_FAIL,
  payload: payload,
  empty: true
})

export const startReq = () => ({
  type: RECEIPT.GET_RECEIPTS_START_REQUEST
})

export const addCommentReq = (id, text) => ({
  type: COMMENT.POST_COMMENT_START_REQUEST,
  payload: { [id]: text }
})

export const addedComment = (payload) => ({
  type: COMMENT.POSTED_COMMENT_SUCCESS,
  payload: payload
})

export const addCommentFail = (error, itemId, text) => ({
  type: COMMENT.POST_COMMENT_FAIL,
  error: error,
  id: itemId,
  payload: text
})

export const openModal = (id, hasReceipts) => ({
  type: MODAL.OPEN,
  id: id,
  hasReceipts: hasReceipts
})

export const closeModal = () => ({
  type: MODAL.CLOSE
})

export const addReceiptReq = (id) => ({
  type: POST_RECEIPT.START_REQUEST,
  id: id
})

export const addedReceipt = (payload) => ({
  type: POST_RECEIPT.SUCCESS,
  payload: payload
})

export const addReceiptFail = (error, itemId, img) => ({
  type: POST_RECEIPT.FAIL,
  error: error,
  id: itemId,
  payload: img
})
