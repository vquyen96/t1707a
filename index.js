const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student_manager');
mongoose.Promise = global.Promise;

var port = 3000;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


var studentRoutes = require('./api/routes/studentRoutes');
// var subjectRoutes = require('./api/routes/subjectRoutes');
studentRoutes(app);
// subjectRoutes(app);

app.listen(port, function(){
	console.log('I am running, running, running... port 3000');
});
