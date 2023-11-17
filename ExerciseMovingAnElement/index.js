const numbers = [1, 2, 3, 4, 5];

const output1 = move(numbers, 2, 2);
const output2 = move(numbers, 4, -2);

console.log(output1);
console.log(output2);

function move(array, index, offset) {
    const newPosition = index + offset;

    if (newPosition < 0 || newPosition >= array.length) {
        console.error('Invalid offset.');
        return;
    }

    const tempArray = [...array];
    const tempValue = tempArray.splice(index, 1)[0];

    tempArray.splice(newPosition, 0, tempValue);

    return tempArray;

}