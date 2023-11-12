let post1 = {
    title: 'Chicken Nuggets',
    body: 'Made with real chickent',
    author: 'Mcdonalds',
    views: 101,
    comments: [{ author: 'Ronald', body: 'Delicious' }, { author: 'Wendys', body: 'Thumbs down' }],
    isLive: false
}

function Post(title, body, author) {
    this.title = title,
        this.body = body,
        this.author = author,
        this.views = 0,
        this.comments = [],
        this.isLive = false
}

let post2 = new Post('Hamburger', 'Quarter Pounder', 'Burger King');

console.log(post1);
console.log(post2);