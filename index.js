const binarySearch = require("./binarySearch");
const mergeSort = require("./mergeSort");
const { ELMENT_NOT_FOUND, intComparator, arraysEqual } = require("./utils");

let arr = [1, 5, 3, 8, 7, 9];

let copyArray = arr.slice();
copyArray.sort();

console.log(mergeSort(arr, intComparator));
console.log(arraysEqual(copyArray, mergeSort(arr, intComparator)));

arr.sort();

console.log(binarySearch(arr, 5, intComparator));
console.log(binarySearch(arr, 5, intComparator) == 2);
console.log(binarySearch(arr, 8, intComparator));
console.log(binarySearch(arr, 8, intComparator) == 4);
console.log(binarySearch(arr, 6, intComparator));
console.log(binarySearch(arr, 6, intComparator) == ELMENT_NOT_FOUND);
