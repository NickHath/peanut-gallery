// for testing 
const fs = require('fs');

// lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./low-db/db.json');
const db = low(adapter);

// Set some defaults
/*
db.defaults({ 'reviews': {} })
  .write()
*/
const axios = require('axios'),
      cheerio = require('cheerio');
      //USE TO LOAD IN HTML TO PARSE $ = cheerio.load();


// export the scraping function
module.exports = function scrapeFromURL(url, title) {
  //const lastPageIndex = require('./last_page_of_reviews.js')(url);
  let lastPageIndex = 5;
  for (var i = 0; i < (lastPageIndex - 1) * 10; i += 10) {
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
