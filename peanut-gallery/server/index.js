// required packages
const express = require('express'),
      cors = require('cors'),   
      app = express(),
      axios = require('axios'),
      port = 4200,
      baseURL = `/api/reviews/`;

// omdb api variables
let omdbApiKey = '1197693b',
    omdbBaseURL = 'http://www.omdbapi.com/';

// webscraper
const scrapeCtrl = require('./web_scraper.js');
const firstAdRegEx = /Movies[\s\S]*?(at Amazon)/g
const secondAdRegEx = /(Add another review)[\s\S]*?(phone or tablet!)/g

app.use(cors());

async function getReviews(movieTitle) {
  let reviews;
  // converts movieTitle from user input to its imdb key, then calls
  // scrapeFromURL using that movie's reviews url endpoint
  await axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${movieTitle}`)
             .then(async (res) => {
                let imdbID = res.data.imdbID;
                reviews = await scrapeCtrl.scrapeFromURL(`http://www.imdb.com/title/${imdbID}/reviews`, movieTitle);
  })
  // returns an object with two ids: reviewsTXT and reviewsHTML
  return reviews;
}

// api endpoint that react will use to get reviews
app.get(`${baseURL}`, async (req, res, next) => {
  let reviews;
  if (req.query.title === undefined) {
    console.error('user has not passed in a title')
  }
  // set movieTitle to user input and clean it
  let movieTitle = req.query.title;
  movieTitle = movieTitle.toLowerCase().replace(' ', '%20');
  // wait for getReviews to return scraped .txt and .html files
  reviews = await getReviews(movieTitle);
  // delete ad text using two RegExps
  reviews.reviewsTXT = reviews.reviewsTXT.replace(firstAdRegEx, '').replace(secondAdRegEx, '');
  
  res.status(200).send(reviews);  
})

app.get(`/api/progress`, scrapeCtrl.getProgress);
app.get(`/api/refresh`, scrapeCtrl.refresh);

app.listen(port, () => console.log(`I'm listening... on port ${port}`));