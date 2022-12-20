'use strict';

const express = require('express');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: "AKIA6ENB2UFPJAG7WPEL",
  secretAccessKey: "AKotqlHarfWCokk7NpmfwOPlY0qWTcSbozakNYiY"
});

var params = {
  Bucket: 'daphne-angular'  // Can be your folder name
};
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/aws/test', (req, res) => {
  s3.listObjects(params, function(err, data) {
    console.log("HERE")
    if (err) {
      console.log('There was an error viewing your album: ' + err.message)
    } else {
      console.log(data.Contents,"<<<all content");
                  
      res.send(data.Contents)    }
  })
  //res.send('Hello DAPHNE !!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});