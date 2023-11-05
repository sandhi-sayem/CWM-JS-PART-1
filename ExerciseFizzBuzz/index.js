
const FizzBuzz1 = num => {
    if ((typeof (num) !== 'number')) {
        console.log('Not a number');
    } else {
        if (num < 1) console.log('Number should be positive');
        for (let i = 1; i <= num; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

const FizzBuzz2 = num => {
    if ((typeof (num) !== 'number')) {
        console.log('Not a number');
    } else {
        if (num < 1) console.log('Number should be positive');
        for (let i = 1; i <= num; i++) {
            let str = '';
            if (i % 3 === 0) {
                str += 'Fizz';
            }
            if (i % 5 === 0) {
                str += 'Buzz';
            }
            if (str.length === 0) {
                str = i.toString();
            }
            console.log(str);
        }
    }
}

FizzBuzz1(34);
// FizzBuzz2(34);

// for (let i = 1; i < 32; i++) {
//     console.log([i, "fizz", "buzz", "fizzbuzz"][(i % 3 === 0) + 2 * (i % 5 === 0)]);
// }
