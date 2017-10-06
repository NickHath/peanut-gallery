// for testing 
const fs = require('fs')

const axios = require('axios'),
      cheerio = require('cheerio');
      //USE TO LOAD IN HTML TO PARSE $ = cheerio.load();

module.exports = function scrapeFromURL(url, endReviewPage, title) {
  for (var i = 0; i < endReviewPage; i += 10) {
    fs.appendFile('reviews/pages_visited', `?start=${i}\n`);
    axios.get(url + `?start=${i}`)

        //  .then((res) => fs.appendFile(`./reviews/${title}_first_${i}_reviews.html`, (res.data)))
         .then((res) => fs.appendFile(`./reviews/reviews.html`, (res.data)))
         .then((res) => {
           let $ = cheerio.load(fs.readFileSync('./reviews/reviews.html'));
           $('p').each((index, element) => {
             fs.appendFile('./reviews/reviews.txt', $(element).text());
           }
         )
        });
  }
}