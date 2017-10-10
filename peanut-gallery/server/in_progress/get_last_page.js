const axios = require('axios'),
cheerio = require('cheerio');
//USE TO LOAD IN HTML TO PARSE $ = cheerio.load();

// THIS WORKS BUT NOT WHEN EXPORTED
// module.exports = function lastPageIndex(url) {

// returning undefined because async
function lastPageIndex(url) {
  let lastPage;
  axios.get(url + `?start=0`)
       .then((res) => {
          let $ = cheerio.load(res.data);
          $('font').each((index, element) => {
            return setTimeOut(() => $(element).text().match(/\d+:$/)[0].replace(':', ''), 3000);
          })
       })
}

console.log(lastPageIndex(`http://www.imdb.com/title/tt0084787/reviews`));

lastPageIndex(`http://www.imdb.com/title/tt0084787/reviews`);
