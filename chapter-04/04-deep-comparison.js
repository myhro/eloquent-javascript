function deepEqual(x, y) {
  if ((typeof x == "object" && typeof y == "object") &&
     (x != null && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length) {
      return false;
    }
    for (item of Object.keys(x)) {
      if (!y.hasOwnProperty(item)) {
        return false;
      }
      if (!deepEqual(x[item], y[item])) {
        return false;
      }
    }
  } else if (x !== y) {
    return false;
  }
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
