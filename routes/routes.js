module.exports = function(app, database) {
    'use strict';
    require('../extensions/dateformat');
    var ObjectID = require('mongodb').ObjectID;

    app.get('/', function(req, res) {
        res.send('hello world');
    });

    app.use('/timeLog', function timeLog(req, res, next) {
        var date = new Date();
        console.log('Time: ', date.MyNewFunctionForDate());
        next();
    });

    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        var collectionNotes = database.collection('notes');

        collectionNotes.insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });

    });

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        database.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

};