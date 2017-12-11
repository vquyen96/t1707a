module.exports = function(app){
	app.route('/_api/v1/subjects')
	.get(function(req, resp){
		resp.send('I\'m getting subject.');
	})
	.post(function(req, resp){
		resp.send('I\'m posting subject.');
	})
	.put(function(req, resp){
		resp.send('I\'m putting subject.');
	})
	.delete(function(req, resp){
		resp.send('I\'m deleting subject.');
	});
};
