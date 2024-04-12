const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    let url = req.query.url;
    let bibtex = '';
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            bibtex = body;
            res.send(bibtex);
        }
        else {
            res.send('Error: ' + error);
        }
    });
}
