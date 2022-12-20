'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/aws/test', (req, res) => {
  res.send('Hello DAPHNE !!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running new on http://${HOST}:${PORT}`);
});
