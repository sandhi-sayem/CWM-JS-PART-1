showPrimes(20);

function showPrimes(limit) {
    if (typeof limit !== 'number') console.log(NaN);
    if (limit < 1) console.log('Please enter a number higher than one');

    for (let num = 2; num <= limit; num++)
        if (isPrime(num)) console.log(num);

}

function isPrime(num) {
    for (let divisor = 2; divisor < num; divisor++)
        if (num % divisor === 0)
            return false;

    return true;
}