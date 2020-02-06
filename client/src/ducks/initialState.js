import { SORTING_OPTIONS } from '../utils/sortingFn'

export const initialState = {
  data: undefined,
  limit: 26, // TODO: set later to 5 for mobile
  offsetSize: 0,
  awaitingData: false,
  postingComment: undefined,
  errorMessage: undefined,
  showModal: false,
  activeId: undefined,
  canSave: false,
  total: 0,
  activeData: null,
  sortBy: SORTING_OPTIONS.BY_DATE
}
