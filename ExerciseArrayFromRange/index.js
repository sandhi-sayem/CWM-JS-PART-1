const arrayFromRange = (min, max) => {
    const numbers = [];
    for (let i = min; i <= max; i++) numbers.push(i);
    return numbers;
}

const numbers = arrayFromRange(1, 5);

console.log(numbers);

