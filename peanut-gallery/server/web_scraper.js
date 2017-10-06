const axios = require('axios'),
      cheerio = require('cheerio');

// export the scraping function
module.exports = function scrapeFromURL(url, title) {
  // hardcode max num of pages to scrape
  let lastPageIndex = 5;
  let reviewsHTML = '';
  let reviewsTXT = '';
  let reviewsJSON = '';
  for (var i = 0; i < (lastPageIndex - 1) * 10; i += 10) {
    axios.get(url + `?start=${i}`)
         .then((res) => reviewsHTML += res.data)
         .then(() => {
           let $ = cheerio.load(reviewsHTML);
           $('p').each((index, element) => {
             reviewsTXT += $(element).text();
           });
         })
         .then(() => {
           return reviewsTXT;
         })

  }
}
