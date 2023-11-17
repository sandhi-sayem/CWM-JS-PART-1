const numbers = [1, 2, 3, 4, 1, 1];

const output1 = except1(numbers, [1, 2]);
const output2 = except2(numbers, [1, 2]);

console.log(output1);
console.log(output2);

function except1(array, excluded) {
    for (let number of excluded)
        array = array.filter(num => num !== number)
    return array;
}

function except2(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}