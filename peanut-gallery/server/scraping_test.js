const scrapeFromURL = require('./web_scraper.js');
      // getLastPage = require('./get_last_page.js');
      
let testImdbURL = `http://www.imdb.com/title/tt0084787/reviews`

console.log(scrapeFromURL(testImdbURL, 'The Thing'));
// console.log(getLastPage(testImdbURL));