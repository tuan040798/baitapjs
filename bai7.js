const str1 = 'JavaScript and Java are completely different languages, both in concept and design. completely different languages';
const str2 = 'different languages'; // 35-53

let result;
let i = 0;
while (i < str1.length) {
    if (str1[i] === str2[0]) {
        let j = 1;
        let test = false;
        while (j < str2.length) {
            if (str1[i + 1] !== str2[j]) {
                test = true;
                break;
            }
            i++;
            j++;
        }
        if (test === false) {
            result = 'Sâu 2 có xuất hiện trong sâu 1';
        }
    }
    i++;
}

console.log(result);