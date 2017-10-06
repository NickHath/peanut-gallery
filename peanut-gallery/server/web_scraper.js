const axios = require('axios'),
      cheerio = require('cheerio');

// export the scraping function
// module.exports = async function scrapeFromURL(url, title) {
async function scrapeFromURL(url, title) {
  // hardcode max num of pages to scrape
  let lastPageIndex = 5;
  let reviewsHTML = '';
  let reviewsTXT = '';
  let reviewsJSON = '';
  for (var i = 0; i < (lastPageIndex - 1) * 10; i += 10) {
    await axios.get(url + `?start=${i}`)
         .then((res) => reviewsHTML += res.data)
         .then(() => {
           let $ = cheerio.load(reviewsHTML);
           $('p').each((index, element) => {
             reviewsTXT += $(element).text();
           });
         })
  }
  console.log(reviewsTXT);
  return reviewsTXT;
  //return 'test';
}

var tempPromise = scrapeFromURL(`http://www.imdb.com/title/tt0084787/reviews`, 'The Thing');
