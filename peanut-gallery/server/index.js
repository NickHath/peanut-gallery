// required packages
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),   // to avoid Access-Control-Allow-Origin error
      app = express(),
      axios = require('axios'),
      port = 4200,
      baseURL = `/api/reviews/`;

// webscraper
const scrapeCtrl = require('./web_scraper.js');
const firstAdRegEx = /Movies[\s\S]*?(at Amazon)/g
const secondAdRegEx = /(Add another review)[\s\S]*?(phone or tablet!)/g

// omdb api variables
let omdbApiKey = '1197693b',
    omdbBaseURL = 'http://www.omdbapi.com/',
    hardCodedTitle = 'Titanic';

app.use(cors());
app.use(bodyParser.json());

async function getReviews(movieTitle) {
  let reviews;
  await axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${movieTitle}`)
    .then(async (res) => {
      let imdbID = res.data.imdbID;
      reviews = await scrapeCtrl.scrapeFromURL(`http://www.imdb.com/title/${imdbID}/reviews`, movieTitle);
  })
  return reviews;
}

// api endpoint that react will use to get reviews
app.get(`${baseURL}`, async (req, res, next) => {
  let reviews, reviewNum = 0;
  if (req.query.title === undefined) {
    console.error('user has not passed in a title')
  }

  let movieTitle = req.query.title;
  movieTitle = movieTitle.toLowerCase().replace(' ', '%20');
  reviews = await getReviews(movieTitle);
  reviews.reviewsTXT = reviews.reviewsTXT.replace(firstAdRegEx, '').replace(secondAdRegEx, '');
  // reviews.reviewsJSON = {};
  // reviews.reviewsTXT.split(/\n\n/).forEach((review) => {
  //   reviewsJSON['review' + reviewNum] = review
  //   reviewNum++;
  // })
  res.status(200).send(reviews);  
})

app.listen(port, () => console.log(`I'm listening... on port ${port}`));




// for getting JSON from omdb api
// // replace movie title's spaces with %20
// hardCodedTitle = hardCodedTitle.toLowerCase().replace(' ', '%20');

// // testing script for single movie title
// axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${hardCodedTitle}`)
//      .then((res) => fs.writeFile(`${hardCodedTitle}.json`, JSON.stringify(res.data)));