Var data = require("../data.json")
export.viewProject = function(req, res) {
	data.friends.push9{
		'name' : req.query.name,
		'description': req.query.decription,
		'imageURL': 'http://lorempixel.com/400/400/people'
	});
	res.render('index', data);
}