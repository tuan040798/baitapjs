const str = '  nguyễN   quAng    tUấn ';

let arr = str.split(' ');
let str1 = '';
let arr1 = [];

let i = 0;
while (i < arr.length) {
  if (arr[i] === '') {
    arr.splice(i, 1);
    i--;
  }
  i++;
}

arr.map(item => {
  item = item.toLowerCase();
  item = item.replace(item[0], item[0].toUpperCase());
  arr1.push(item);
});

str1 = arr1.join(' ');

console.log(`Chuỗi sau khi chuẩn hóa: \'${str1}\'`);
