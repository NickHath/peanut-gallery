// for testing 
const fs = require('fs')

// lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./low-db/db.json')
const db = low(adapter)

// Set some defaults
/*
db.defaults({ 'reviews': {} })
  .write()
*/
const axios = require('axios'),
      cheerio = require('cheerio');
      //USE TO LOAD IN HTML TO PARSE $ = cheerio.load();

function getNumPages(url) {
  axios.get(url + `?start=0`)
       .then((res) => {
          let $ = cheerio.load(res.data);
          let lastPage;
          $('font').each((index, element) => {
            // pull text from font tag and set lastPage to last word in .text()
            let pages = $(element).text();
            fs.writeFile('finalPage.txt', pages);
          })
       })
}


module.exports = function scrapeFromURL(url, endReviewPage, title) {
  getNumPages(`url`);
  for (var i = 0; i < endReviewPage; i += 10) {
    fs.appendFile('reviews/pages_visited', `?start=${i}\n`);
    axios.get(url + `?start=${i}`)

        //  .then((res) => fs.appendFile(`./reviews/${title}_first_${i}_reviews.html`, (res.data)))
         .then((res) => fs.appendFile(`./reviews/reviews.html`, (res.data)))
         .then((res) => {
           let $ = cheerio.load(fs.readFileSync('./reviews/reviews.html'));
           let j = 1;
           $('p').each((index, element) => {
             fs.appendFile('./reviews/reviews.txt', $(element).text());
            
            /*
            // using lowdb

            // Add a post -- takes forever to add the review as an object...
            // is it traversing entire reviews array each time?
            // make it all nested objects instead
            // using an array for reviews: 3m 33s
            // using an object for reviews: 32.3s
            db.get('reviews')
              .assign({ id: j++, review: $(element).text()})
              .write()
            */
           }
         )
        });
  }
}