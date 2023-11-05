// check speed. speed less than max 'ok', add 1 demerit point for every 5 miles higher than speed limit. Points 12 or higher results in license being suspended.

checkSpeed(70);

function checkSpeed(speed) {
    if (typeof speed !== 'number') return NaN;

    const maxSpeed = 70;
    const graceSpeed = 5;

    if (speed < 0) return console.log('Please enter a positive speed');

    if (speed < maxSpeed + graceSpeed) return console.log('Ok');

    const demeritPoint = Math.floor((speed - maxSpeed) / 5);

    if (demeritPoint >= 12) {
        return console.log(`You have 12+ demerit points. Your license is suspended.`);
    } else {
        return console.log(`You have ${demeritPoint} point${demeritPoint > 1 ? 's' : ''}.`);
    }
}