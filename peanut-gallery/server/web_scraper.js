const axios = require('axios'),
      cheerio = require('cheerio');

// let progress = 0;
// app.get(url, (req, res, next) => {
//   res.status.send(progress);
// })

// export the scraping function
module.exports = {
  scrapeFromURL: async function (url, title) {
    // hardcode max num of pages to scrape
    let lastPageIndex = 5;
    let reviewsHTML = '';
    let reviewsTXT = '';
    let reviewsJSON = '';
    for (var i = 0; i < (lastPageIndex - 1) * 10; i += 10) {
      await axios.get(url + `?start=${i}`)
          .then((res) => reviewsHTML += res.data)
          // update progress var each time a review .html page is scraped
          // .then(() => progress += 1/lastPageIndex)
          .then(() => {
            let $ = cheerio.load(reviewsHTML);
            $('p').each((index, element) => {
              reviewsTXT += $(element).text();
            });
          })
    }
    return {reviewsTXT: reviewsTXT, reviewsHTML: reviewsHTML};
  }
}

