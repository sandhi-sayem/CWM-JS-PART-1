const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

console.log(countOccurrences(numbers, 1));
console.log(countOccurrencesReduce(numbers, 1));

console.log(countOccurrences(numbers, 5));
console.log(countOccurrences(numbers, 5));

console.log(countOccurrences(numbers, 2));
console.log(countOccurrences(numbers, 2));

function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement) count++;
    return count;
}

function countOccurrencesReduce(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = currentValue === searchElement ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}