const arr = [2, 3, 76, 46, 5, 3, 4, 53, 43, 45, 98, 355];
const numberAdd1 = 41;

let arr1 = [...arr.sort((a, b) => { return a - b })];

for (let i = 0; i < arr1.length; i++) {
    if (numberAdd1 >= arr1[arr1.length - 1]) {
        arr1.push(numberAdd1);
        break;
    }
    if (numberAdd1 <= arr1[0]) {
        arr1.unshift(numberAdd1);
        break;
    }
    if (numberAdd1 >= arr1[i] && numberAdd1 <= arr1[i + 1]) {
        arr1.splice(i + 1, 0, numberAdd1);
        break;
    }
}

console.log(arr1);