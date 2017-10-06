// for testing
const fs = require('fs');

// required packages
const express = require('express'),
      bodyParser = require('body-parser'),
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

app.use(bodyParser.json());

// replace movie title's spaces with %20
hardCodedTitle = hardCodedTitle.toLowerCase().replace(' ', '%20');

// testing script for single movie title
axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${hardCodedTitle}`)
     .then((res) => fs.writeFile(`${hardCodedTitle}.json`, JSON.stringify(res.data)));

// api endpoint that react will use to get reviews
app.get(`${baseURL}`, (req, res, next) => {
  let movieTitle = req.query.title;
  console.log(movieTitle);
  movieTitle = movieTitle.toLowerCase().replace(' ', '%20');
  // get imdbID and ratings from omdb api
  axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${movieTitle}`)
       .then((res) => {
         let imdbKey = res.data.imdbID;
         // to write -- call web_scraper with correct imdb url, return all reviews

         let reviews = scrapeFromURL(`http://www.imdb.com/title/${imdbKey}/reviews`,movieTitle);
         res.status(200).send(reviews);
      });
})

app.listen(port, () => console.log(`I'm listening... on port ${port}`));