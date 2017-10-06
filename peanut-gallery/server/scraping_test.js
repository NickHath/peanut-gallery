const scrapeFromURL = require('./web_scraper.js');
let testImdbURL = `http://www.imdb.com/title/tt0084787/reviews`
scrapeFromURL(testImdbURL, 60, 'The Thing');