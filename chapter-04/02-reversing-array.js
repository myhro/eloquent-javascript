function reverseArray(arr) {
  r = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    r.push(arr[i])
  }
  return r;
}

function reverseArrayInPlace(arr) {
  let head = 0;
  let tail = arr.length - 1;
  let tmp = 0;
  while (true) {
    tmp = arr[head]
    arr[head] = arr[tail]
    arr[tail] = tmp
    head++;
    tail--;
    if (head >= tail) {
      break;
    }
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
