var mongoose = require('mongoose');
var Student = require('../models/student');

exports.get_list = function(req, resp){
	console.log('i am getting list student.');
	Student.find({}, function(err, result) {
	    if (err)
	      resp.send(err);
	    resp.json(result);
    });
};

exports.add = function(req, resp){
	console.log('i am adding student.');
	var student = new Student(req.body);
	student.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    resp.send('Save success');
	  }
	});
};

exports.get_detail = function(req, resp){
	console.log('i am getting a student.');
	Student.findById(req.params.id, function(err, result) {
    	if (err)
      	  resp.send(err);
    	resp.json(result);
  	});

};

exports.update = function(req, resp){
	console.log('i am updating student.');
	Student.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
    	if (err)
      	  resp.send(err);
    	resp.json(task);
  	});
};

exports.delete = function(req, resp){
	console.log('i am deleting student.');
	Student.remove({
	    _id: req.params.id
	  }, function(err, result) {
	    if (err)
	      resp.send(err);
	    resp.json({ message: 'Student successfully deleted' });
	  });
};