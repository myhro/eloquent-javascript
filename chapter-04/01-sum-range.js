function range(start, end, step = 1) {
  let r = [];
  if (start < end) {
    step = Math.abs(step);
    for (let i = start; i <= end; i += step) {
      r.push(i);
    }
  } else {
    step = -Math.abs(step);
    for (let i = start; i >= end; i += step) {
      r.push(i);
    }
  }
  return r;
}

function sum(arr) {
  let s = 0;
  for (let i of arr) {
    s += i;
  }
  return s;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
