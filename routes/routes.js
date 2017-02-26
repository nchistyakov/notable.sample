module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    require('../extensions/dateformat');


    //Middle ware that is specific to this router
    router.use(function timeLog(req, res, next) {

        var date = new Date();
        console.log('Time: ', date.MyNewFunctionForDate());
        // console.log('Time: ', Date.now().toString());
        next();


    });

    router.get('/', function(req, res) {
        res.json({ 'foo': 'bar' });
    });

    // // Define the home page route
    // router.get('/', function(req, res) {
    //     res.send('home page');
    // });

    router.post('/notes', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });



    return router;
})();