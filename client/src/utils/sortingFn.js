export function dynamicSort (property) {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    return result * sortOrder
  }
}

export function sortOutDuplicates (arrayToSort) {
  const result = []
  arrayToSort.forEach((item, index) => {
    // checking all except the last item in array
    if (arrayToSort[index + 1] && item.slice(0, 23) !== arrayToSort[index + 1].slice(0, 23)) {
      result.push(item)
    }
    // only last one to prev.
    if (index + 1 === arrayToSort.length && item[index - 1].slice(0, 23) !== item.slice(0, 23)) {
      result.push(item)
    }
  })
  return result
}

export const SORTING_OPTIONS = {
  BY_DATE: 'date',
  BY_MERCHANT: 'merchant'
}
