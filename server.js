const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);


app.listen(port, () => {
    console.log('We are live on ' + port);
});