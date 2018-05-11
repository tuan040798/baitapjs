const str = 'You can always transpile to your preferred module system';

let arr = str.trim().split(' ');
let maxArr = arr[0];
let indexMax = 1;

arr.forEach((item, index) => {
  if (item.length > maxArr.length) {
    maxArr = item;
    indexMax = index;
  }
});

console.log(`Kí tự dài nhất là: \'${maxArr}\'. Xuất hiện ở vị trí: ${indexMax}`);
