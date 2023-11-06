console.log(sum(10));

function sum(limit) {
    if (typeof limit !== 'number') return NaN;
    if (limit < 0) return 'Please enter a positive number.';

    let total = 0;

    for (let i = 3; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            total += i;

    return total;
}



