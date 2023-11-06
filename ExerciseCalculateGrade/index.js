const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calcuateAverage(marks);

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B'
    return 'A';
}

function calcuateAverage(marks) {
    let total = 0;

    for (let grade of marks)
        total += grade;

    return total / marks.length;
}


