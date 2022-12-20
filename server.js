'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

app.get('/aws/test', (req, res) => {
  res.json('Hello DAPHNE !!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running new on http://${HOST}:${PORT}`);
});
