const axios = require('axios')
    , cheerio = require('cheerio');
// I, Tanya - tt5580036
// Jaws - tt0073195
let sampleTitle = 'tt0073195'
  , baseUrl = `http://www.imdb.com/title/${sampleTitle}/reviews/_ajax`
  , paginationKey = '';

let reviewsTXT = '';
let numReviews = 0;

function getReviews(url) {
  axios.get(url)
       .then(res => {
          let $ = cheerio.load(res.data);

          $('.text').each((index, element) => {
            // remove all newlines and carriage returns
            reviewsTXT += $(element).text().replace(/(\r\n|\n|\r)/gm,' ');
            numReviews++;
          });

          paginationKey = $('.load-more-data').attr('data-key');
          if (paginationKey) {
            getReviews(`${baseUrl}?paginationKey=${paginationKey}`);
          } else {
            console.log(numReviews);
            console.log(reviewsTXT);
          }
       });
}

getReviews(baseUrl);
