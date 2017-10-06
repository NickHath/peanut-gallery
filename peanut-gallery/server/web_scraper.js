// for testing 
const fs = require('fs')

const axios = require('axios'),
      cheerio = require('cheerio'),
      $ = cheerio.load();

module.exports = function scrapeFromURL(url, endReviewPage, title) {
  for (var i = 0; i < endReviewPage; i += 10)
  axios.get(url + `?start=${i}`)
       .then((res) => fs.writeFile(`${title}.json`, res))
}