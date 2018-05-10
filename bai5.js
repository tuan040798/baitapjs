const str = 'It   searches a   string for a     pattern   and returns true or  false depending   on the result';

let arr = str.split(' ' || '/n' || '/t');
let i = 0;

while (i < arr.length) {
    if (arr[i] === '') {
        arr.splice(i, 1);
        i--;
    }
    i++;
}

console.log(`Chuỗi có: ${arr.length} từ`);