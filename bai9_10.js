const arr = [2, 3, 76, 46, 5, 3, 4, 53, 43, 45, 98, 355];
const numberAdd1 = 55;

let arr1 = [
  ...arr.sort((a, b) => {
    return a - b;
  })
];

arr1.every((item, index) => {
  if (numberAdd1 >= arr1[arr1.length - 1]) {
    arr1.push(numberAdd1);
    return false;
  }
  if (numberAdd1 <= arr1[0]) {
    arr1.unshift(numberAdd1);
    return false;
  }
  if (numberAdd1 <= item) {
    arr1.splice(index, 0, numberAdd1);
    return false;
  }
  return true;
});

console.log(arr1);
