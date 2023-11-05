let person = {
    name: 'Abcde',
    age: 99
};

// Dot Notation
person.name = 'John';

console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';

console.log(person['name']);

// Swap colors
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

let c = a;
a = b;
b = c;

console.log(a);
console.log(b)