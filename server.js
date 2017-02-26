const express = require('express');
const app = express();
const path = require('path');
const mongodb = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const routes = require('./routes/routes');
const db = require('./config/db');
const publicDir = path.join(__dirname, 'public');

const port = 8000;
// app.set('public', __dirname + '/public');
app.set(express.static(publicDir));
// app.use(express.static(__dirname + "/public"));
// app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', routes);

mongodb.connect(db.url, (err, database) => {

    if (err) {
        return console.log(err);
    }
    require('./routes/routes')(app, database, publicDir);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });

})

// routes(app);

//require('./routes/routes')("2352134632456");