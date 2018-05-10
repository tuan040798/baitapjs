const arr = [33, 4, 7, 33, 22, 65, 22, 65, 98, 98, 0, 33, 33];
let arr2 = [];

let compareArr = (word, number1, arr) => {
    for (let i = 0; i < number1; i++) {
        if (word === arr[i]) {
            return true;
        }
    }
    return false;
}

let i = 0;
while (i < arr.length) {
    let count = 1;
    let result = compareArr(arr[i], i, arr);
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && result === false) {
            count += 1;
        }
    }

    if (count > 1) {
        arr2.push(arr[i]);
        arr2.push(count);
    }

    i++;
}

arr.forEach(x => {
    let test = false;
    arr2.forEach(y => {
        if (x === y) {
            test = true;
        }
    });

    if (test === false) {
        arr2.push(x);
        arr2.push(1);
    }
});

for (let i = 0; i < arr2.length; i += 2) {
    console.log(`Số ${arr[i]} xuất hiện: ${arr2[i + 1]}`);
}
