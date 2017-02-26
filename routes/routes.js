module.exports = function(app, database) {
    'use strict';
    require('../extensions/dateformat');
    //var router = app.Router;

    //Middle ware that is specific to this router

    app.get('/', function(req, res) {
        res.send('hello world');
    });

    app.use(function timeLog(req, res, next) {
        var date = new Date();
        console.log('Time: ', date.MyNewFunctionForDate());
        // console.log('Time: ', Date.now().toString());
        next();
    });

    app.post('/notes', (req, res) => {

        // console.log(req.body)

        const note = { text: req.body.body, title: req.body.title };
        // database.collection('notes').insert()
        var collectionNotes = database.collection('notes');

        collectionNotes.insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });

        // res.send('Hello')
    });

};