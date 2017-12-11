var studentController = require('../controllers/studentController');

module.exports = function(app){
	app.route('/_api/v1/students')
		.get(studentController.get_list)
		.post(studentController.add);
		
	app.route('/_api/v1/students/:id')
		.get(studentController.get_detail)
		.put(studentController.update)
		.delete(studentController.delete);
};