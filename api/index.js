exports.hello = function(req, res) {
	res.json({
		error: false,
		message: 'Hello!'
	})
}

exports.add = function(req, res) {
	res.json({
		error: false,
		message: 'success',
		data: Math.round(req.body.num1) + Math.round(req.body.num2)
	})
}

exports.setRole = function(req, res) {
	req.session.role = req.body.role

	res.json({
		role: req.session.role
	})
}

exports.checkRole = function(req, res, next){
	return [1, 99].indexOf(req.session.role) != -1 ? next() : ''
}