const scrapeCtrl = require('./web_scraper');

// funcs must be async
async function returnFromAsync () {
  let temp;
  temp = await scrapeCtrl.scrapeFromURL('http://www.imdb.com/title/tt0084787/reviews', 'The Thing')
  console.log(temp);
  return temp;
}

returnFromAsync();