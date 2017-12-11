var mongoose = require('mongoose');

/*
	CREATE TABLE students(
		rollNumber varchar(50),
	);		
*/
// Schema
var Student = mongoose.model('students', { 
	rollNumber: String,  
	name: String,
	email: String,
	status: Number
});

module.exports = Student;