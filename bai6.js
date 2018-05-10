const str = 'it is small it is big it is very small it is very big it is beautiful it is very beautiful hi helllo';
let arr2 = [];

let compareArr = (word, number1, arr) => {
    for (let i = 0; i < number1; i++) {
        if (word === arr[i]) {
            return true;
        }
    }
    return false;
}

let arr = str.split(' ');

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

console.log(arr2.join(','));

