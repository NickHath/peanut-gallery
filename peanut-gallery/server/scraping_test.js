const scrapeFromURL = require('./web_scraper.js'),
      axios = require('axios');
      // getLastPage = require('./get_last_page.js');
      
 let testImdbURL = `http://www.imdb.com/title/tt0084787/reviews`

console.log(scrapeFromURL(testImdbURL, 'The Thing'));
// console.log(getLastPage(testImdbURL));

// axios.get('http://localhost:4000/api/reviews/?title=Terminator')
//      .then((res) => console.log(res))

