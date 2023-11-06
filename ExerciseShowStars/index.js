showStars(10);

function showStars(rows) {
    if (typeof rows !== 'number') console.log(NaN);
    if (rows < 1) console.log('Please enter a number higher than zero');


    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i; j++)
            str += '*';
        console.log(str);
    }
}


