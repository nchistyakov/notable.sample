const express = require('express');
const app = express();

const mongodb = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const routes = require('./routes/routes');
const db = require('./config/db');


const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', routes);

mongodb.connect(db.url, (err, database) => {

    if (err) {
        return console.log(err);
    }
    require('./routes/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

})

// routes(app);

//require('./routes/routes')("2352134632456");