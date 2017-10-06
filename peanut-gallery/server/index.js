const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      axios = require('axios'),
      port = 4000,
      baseURL = `/api/reviews`;

let omdbApiKey = '1197693b',
    hardCodedTitle = 'Titanic';

app.use(bodyParser());


app.listen(port, () => console.log(`I'm listening... on port ${port}`));