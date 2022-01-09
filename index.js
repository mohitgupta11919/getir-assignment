
var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

var router = require('./router');



app.use(bodyParser.json());

// connecting to mongoDB  and set connection variable
mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true', {useNewUrlParser: true});
var db = mongoose.connection;

// db connection verificaton
if (!db) {
  console.log('error connecting to db!');
} else {
  console.log('DB connected successfully.');
}

var port = process.env.PORT || 8000;

// allowing only psot request
app.all('*', function(req, res, next) {
  if (req.method != 'POST') {
    res.status(405)
        .json({'code': 'METHOD_NOT_ALLOWED', 'message': req.method + ' method is not allowed!'});
  }
  next();
});


app.use('/api', router);


var server = app.listen(port, function() {
  console.log('Assignment running  on port ' + port);
});

module.exports = server;


