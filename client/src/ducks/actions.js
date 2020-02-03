import { RECEIPT, COMMENT, MODAL } from './actionTypes'

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
  payload
})

export const addCommentFail = (error, itemId, text) => ({
  type: COMMENT.POST_COMMENT_FAIL,
  error: error,
  id: itemId,
  payload: text
})

export const openModal = (id, hasReceipts) => ({
  type: MODAL.OPEN,
  id,
  hasReceipts
})

export const closeModal = () => ({
  type: MODAL.CLOSE
})
