const numbers = [1, 2, 3, 4, 1];
// const numbers = [];

// const max = getMax(numbers);

console.log(getMax(numbers));
console.log(getMaxReduce(numbers));

function getMax(array) {
    if (array.length === 0) return undefined;

    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber)
            maxNumber = array[i];
    }
    return maxNumber;
}

function getMaxReduce(array) {
    if (array.length === 0) return undefined;

    return array.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue);
}