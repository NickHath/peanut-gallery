const axios = require('axios'),
      cheerio = require('cheerio');

// set progress object to defaults
let progress = {percent: 0, display:''};

// export the scraping function
module.exports = {
  // resets progress object
  refresh: function() {
    progress = {percent: 0, display:''};
  },
  scrapeFromURL: async function (url, title) {
    // hardcoded max num of pages for testing phase
    let lastPageIndex = 5;
    let reviewsHTML = '';
    let reviewsTXT = '';
    let reviewsJSON = '';
    progress.display = `Scraping Page 0 of ${lastPageIndex}`;
    // cycle through ?start=0 to ?start=numreviews, incrementing by 10
    for (var i = 0; i < lastPageIndex * 10; i += 10) {
      await axios.get(url + `?start=${i}`)
          // build out html string
          .then((res) => reviewsHTML += res.data)
          // update progress vars each time a review .html page is scraped
          .then(() => progress.percent += (1/lastPageIndex) * 100)
          .then(() => progress.display = `Scraping Page ${i/10 + 1} of ${lastPageIndex}`)
          .then(() => {
            let $ = cheerio.load(reviewsHTML);
            // pull out all text contained in <p> tags and build out txt string
            $('.text').each((index, element) => {
              reviewsTXT += $(element).text();
            });
          })
    }
    // reset progress after scraping
    return {reviewsTXT: reviewsTXT, reviewsHTML: reviewsHTML};
  },
  // returns progress object 
  getProgress: function (req, res, next) {
    res.status(200).json(progress);
  }
}

