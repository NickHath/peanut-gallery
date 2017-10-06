// for testing
const fs = require('fs');

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      axios = require('axios'),
      port = 4000,
      baseURL = `/api/reviews/`;

const scrapeFromURL = require('./web_scraper.js')

// omdb api 
let omdbApiKey = '1197693b',
    omdbBaseURL = 'http://www.omdbapi.com/',
    hardCodedTitle = 'Titanic';

app.use(bodyParser());

// replace movie title's spaces with %20
hardCodedTitle = hardCodedTitle.toLowerCase().replace(' ', '%20');

// testing script for single movie title
axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${hardCodedTitle}`)
.then((res) => fs.writeFile(`${hardCodedTitle}.json`, JSON.stringify(res.data)));


// api setup that react will use to get reviews
app.get(`${baseURL}:title`, (req, res, next) => {
  let movieTitle = req.params.title;
  movieTitle = movieTitle.toLowerCase().replace(' ', '%20');
  axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${movieTitle}`)
       .then((res) => {
         // to write -- call web_scraper with correct imdb url, return all reviews
         // 5 means end on the 5th page
         // scrapeFromURL(`http://www.imdb.com/title/${imdbKey}/reviews`, 5, movieTitle);
         res.status(200).send(res.data)
      });
})

app.listen(port, () => console.log(`I'm listening... on port ${port}`));