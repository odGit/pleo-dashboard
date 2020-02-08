import { SORTING_OPTIONS } from '../utils/sortingFn'

export const initialState = {
  data: undefined,
  limit: 20,
  offsetSize: 0,
  awaitingData: false,
  postingComment: undefined,
  errorMessage: undefined,
  showModal: false,
  activeId: undefined,
  canSave: false,
  total: 0,
  activeData: null,
  sortBy: SORTING_OPTIONS.BY_DATE,
  select: []
}
