function merge(arr1, arr2, comparator) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) === 1) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid, arr.length), comparator);

  return merge(left, right, comparator);
}

module.exports = mergeSort;
