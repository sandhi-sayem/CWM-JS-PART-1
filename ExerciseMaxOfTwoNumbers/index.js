const maximum = (x, y) => {
    return (x > y) ? x : y;
}

let a = 2;
let b = 4;
console.log(`x: ${a}, y: ${b}, maximum: ${maximum(a, b)}`);

a = 3;
b = 1;
console.log(`x: ${a}, y: ${b}, maximum: ${maximum(a, b)}`);

a = 7;
b = 7;
console.log(`x: ${a}, y: ${b}, maximum: ${maximum(a, b)}`);
