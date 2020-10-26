const { ELMENT_NOT_FOUND } = require("./utils");

function binarySearch(arr, x, comparator) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (comparator(arr[mid], x) === 0) return mid;
    else if (comparator(arr[mid], x) === -1) start = mid + 1;
    else if (comparator(arr[mid], x) === 1) end = mid - 1;
  }

  return ELMENT_NOT_FOUND;
}

module.exports = binarySearch;
