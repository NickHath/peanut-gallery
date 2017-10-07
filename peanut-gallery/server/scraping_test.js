const scrapeFromURL = require('./web_scraper.js'),
      axios = require('axios');
      // getLastPage = require('./get_last_page.js');
      
//  let testImdbURL = `http://www.imdb.com/title/tt0084787/reviews`

// console.log(scrapeFromURL(`http://www.imdb.com/title/tt0084787/reviews`, 'The Thing'));
// console.log(getLastPage(testImdbURL));

// test my api
axios.get('http://localhost:4200/api/reviews/?title=Titanic')
     .then((res) => console.log(res.data))

