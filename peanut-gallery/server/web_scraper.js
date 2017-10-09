const axios = require('axios'),
      cheerio = require('cheerio');

let progress = {percent: 0, display:''};

// export the scraping function
module.exports = {
  scrapeFromURL: async function (url, title) {
    // hardcode max num of pages to scrape
    let lastPageIndex = 10;
    let reviewsHTML = '';
    let reviewsTXT = '';
    let reviewsJSON = '';
    progress.display = `Scraping Page 0 of ${lastPageIndex}`;
    for (var i = 0; i < lastPageIndex * 10; i += 10) {
      await axios.get(url + `?start=${i}`)
          .then((res) => reviewsHTML += res.data)
          // update progress var each time a review .html page is scraped
          .then(() => progress.percent += (1/lastPageIndex) * 100)
          .then(() => progress.display = `Scraping Page ${i/10 + 1} of ${lastPageIndex}`)
          .then(() => {
            let $ = cheerio.load(reviewsHTML);
            $('p').each((index, element) => {
              reviewsTXT += $(element).text();
            });
          })
    }
    // reset progress after scraping
    progress.percent = 0;
    progress.display = '';
    return {reviewsTXT: reviewsTXT, reviewsHTML: reviewsHTML};
  },
  getProgress: function (req, res, next) {
    res.status(200).json(progress);
  }
}

