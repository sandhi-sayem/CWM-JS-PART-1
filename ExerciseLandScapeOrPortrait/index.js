const isLandscape = (width, height) => {
    return width > height;
}

console.log(isLandscape(300, 3000));
console.log(isLandscape(200, 20));
console.log(isLandscape(100, 100));