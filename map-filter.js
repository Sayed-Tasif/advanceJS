const numbers = [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const outPut = [];
// for (let i = 0; i < numbers.length; i++){
//     const elements = numbers[i];
//     const squ = elements ** 2;
//     outPut.push(squ);
// }


let value = numbers.map(function(elements){
    return elements ** 2;
});
console.log(value);

// filters the data according to the condition.
const bigNumber = numbers.filter(x => x%3 == 0);
console.log(bigNumber);

// checks if the condition matches.
// returns only one match

const isThere = numbers.find(x => x % 5 == 0);
console.log(isThere);