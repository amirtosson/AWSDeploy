'use strict';

const express = require('express');
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/aws/test', (req, res) => {
  res.json('Hello DAPHNE !!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running new on http://${HOST}:${PORT}`);
});
