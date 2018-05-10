const arr = [1.1, 2.2, 3.3, 1.1, 2.2, 4.4, 5.5, 2.2, 6.6, 5.5, 7.7, 8.8, 1.1, 9.9, 7.7, 9.9];
let arr1 = []; // lưu phần tử xuất hiện nhiều hơn 1 lần
let arr2 = []; // lưu phần tử xuất hiện 1 lần

let i = 0;
while (i < arr.length) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr1.push(arr[i]); // thêm phần tử xuất hiện nhiều hơn 1 lần vào mảng
        }
    }
    i++;
}

for (i = 0; i < arr.length; i++) {
    let test = false;
    for (let j = 0; j < arr1.length; j++) {
        if (arr[i] === arr1[j]) { // so sánh từng phần tử của mảng ban đầu có nằm trong mảng mà phần tử cuất hiện nhiều lần không
            test = true; // nếu có thì loại
            break;
        }
    }

    if (test === false) { // nếu không có thì thêm vào mảng mới
        arr2.push(arr[i]);
    }
}

console.log(`Những phần tử chỉ xuất hiện một lần là: ${arr2}`);