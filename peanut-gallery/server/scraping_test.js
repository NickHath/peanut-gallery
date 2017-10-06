const scrapeFromURL = require('./web_scraper.js'),
      lastPageIndex = require('./last_page_of_reviews.js');
      
let testImdbURL = `http://www.imdb.com/title/tt0084787/reviews`

scrapeFromURL(testImdbURL, 'The Thing');
console.log(lastPageIndex(testImdbURL));