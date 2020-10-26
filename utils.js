function intComparator(a, b) {
  if (a == b) return 0;
  else if (a > b) return 1;
  else return -1;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const ELMENT_NOT_FOUND = -1;

module.exports.ELMENT_NOT_FOUND = ELMENT_NOT_FOUND;
module.exports.intComparator = intComparator;
module.exports.arraysEqual = arraysEqual;
