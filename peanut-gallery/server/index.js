const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 4000,
      baseURL = `/api/reviews`;

app.use(bodyParser());


app.listen(port, () => console.log(`I'm listening... on port ${port}`));