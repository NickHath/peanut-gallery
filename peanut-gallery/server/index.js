// required packages
const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),   // to avoid Access-Control-Allow-Origin error
      app = express(),
      axios = require('axios'),
      port = 4000,
      baseURL = `/api/reviews/`;

// webscraper
const scrapeFromURL = require('./web_scraper.js')

// omdb api variables
let omdbApiKey = '1197693b',
    omdbBaseURL = 'http://www.omdbapi.com/',
    hardCodedTitle = 'Titanic';

app.use(cors())
app.use(bodyParser.json());

// api endpoint that react will use to get reviews
app.get(`${baseURL}`, (req, res, next) => {
  let reviews;
  // console.log(req.query)
  if (req.query.title === undefined) {
    console.error('user has not passed in a title')
  }

  let movieTitle = req.query.title;
  movieTitle = movieTitle.toLowerCase().replace(' ', '%20');
  // get imdbID and ratings from omdb api
  axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${movieTitle}`)
       .then((res) => {
         let imdbID = res.data.imdbID;
         reviews = scrapeFromURL(`http://www.imdb.com/title/${imdbID}/reviews`, movieTitle);
      })
      res.status(200).send(reviews)  
})

app.listen(port, () => console.log(`I'm listening... on port ${port}`));




// for getting JSON from omdb api
// // replace movie title's spaces with %20
// hardCodedTitle = hardCodedTitle.toLowerCase().replace(' ', '%20');

// // testing script for single movie title
// axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${hardCodedTitle}`)
//      .then((res) => fs.writeFile(`${hardCodedTitle}.json`, JSON.stringify(res.data)));