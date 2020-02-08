export function dynamicSort (property) {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a, b) {
    const result = (byKye(property, a) < byKye(property, b)) ? (
      -1) : (
      (byKye(property, a) > byKye(property, b)) ? 1 : 0
    )
    return result * sortOrder
  }
}

function byKye (path, obj) {
  // Accessing nested JavaScript objects with string key
  return path.split('.').reduce((prev, curr) => prev && prev[curr], obj)
}

export const SORTING_OPTIONS = {
  BY_DATE: 'date',
  BY_MERCHANT: 'merchant',
  BY_NAME: 'user.email'
}

export const SELECT_OPTIONS = {
  WITH_COMMENT: 'comment',
  WITH_RECEIPT: 'receipts'
}
