const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      axios = require('axios'),
      port = 4000,
      baseURL = `/api/reviews`;

// omdb api 
let omdbApiKey = '1197693b',
    omdbBaseURL = 'http://www.omdbapi.com/',
    hardCodedTitle = 'Titanic';

// replace movie title's spaces with %20
hardCodedTitle = hardCodedTitle.toLowerCase().replace(' ', '%20');
app.use(bodyParser());

axios.get(`${omdbBaseURL}?apikey=${omdbApiKey}&t=${hardCodedTitle}`)
     .then((res) => console.log(res.data));

app.listen(port, () => console.log(`I'm listening... on port ${port}`));