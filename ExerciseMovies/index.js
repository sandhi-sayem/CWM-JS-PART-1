const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const getTitleByYearAndRating = (movies, year, rating) =>
    movies
        .filter(element => element.year >= year && element.rating >= rating)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(movie => movie.title);

const titles = getTitleByYearAndRating(movies, 2018, 4.5);

console.log(titles);