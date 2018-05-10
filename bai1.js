const hoTen = 'Nguyễn Quang HiHi Tuấn ';

let str = hoTen.repeat(1).trim();
let arr = str.split(' ');
let ho = arr[0];
let ten = arr[arr.length - 1];

arr.shift();
arr.pop();

let dem = arr.join(' ');

console.log(`Họ tên sau khi sắp xếp là: ${ten} ${ho} ${dem}`);