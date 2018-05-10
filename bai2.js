const str = 'You can always transpile to your preferred module system';

let arr = str.split(' ');
let maxArr = arr[0];
let index = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxArr.length) {
        maxArr = arr[i];
        index = i + 1;
    }
}

console.log(`Kí tự dài nhất là: \'${maxArr}\'. Xuất hiện ở vị trí: ${index}`);

