function arrayToList(arr) {
  list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list,
    }
  }
  return list;
}

function listToArray(list) {
  r = [];
  for (node = list; node != null; node = node.rest) {
    r.push(node.value);
  }
  return r;
}

function prepend(n, list) {
  l = arrayToList([n]);
  l.rest = list;
  return l;
}

function nth(list, n) {
  let i = 0;
  for (node = list; node != null; node = node.rest) {
    if (i == n) {
      return node.value;
    }
    i++;
  }
  return undefined;
}

function recur_nth(list, n) {
  if (list == null) {
    return undefined;
  } else if (n == 0) {
    return list.value;
  }
  return recur_nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
