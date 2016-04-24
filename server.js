var express = require('express'),
	session = require('express-session'),
	app = express(),
	bodyParser = require('body-parser'),
	api = require('./api')

app.use(bodyParser())
app.use(session({
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}))

app.get('/', api.checkRole, api.hello)
app.post('/add', api.checkRole, api.add)
app.post('/setRole', api.setRole)

app.listen(8888, function() {
	console.log('server started')
})

exports.app = app