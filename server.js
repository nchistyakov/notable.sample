const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});