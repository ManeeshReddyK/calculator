var express = require('express');
var app = express();

app.use(express.static('frontend'));

app.use('/add', function (req, res, next) {
    var firstnumber = req.query.firstnumber;
    var secondnumber = req.query.secondnumber;
    var sum = parseInt(firstnumber) + parseInt(secondnumber);
    res.send({ 'sum': sum });
});

app.use('/substract', function (req, res, next) {
    var firstnumber = req.query.firstnumber;
    var secondnumber = req.query.secondnumber;
    var substract = parseInt(firstnumber) - parseInt(secondnumber);
    res.send({ 'substract': substract });
});

app.use('/multiply', function (req, res, next) {
    var firstnumber = req.query.firstnumber;
    var secondnumber = req.query.secondnumber;
    var multiply = parseInt(firstnumber) * parseInt(secondnumber);
    res.send({ 'multiply': multiply });
});

app.use('/divide', function (req, res, next) {
    var firstnumber = req.query.firstnumber;
    var secondnumber = req.query.secondnumber;
    var divide = parseInt(firstnumber) / parseInt(secondnumber);
    res.send({ 'divide': divide });
});

app.listen(process.env.PORT || 3000);
