const _userApi = require('./api/userApi')
const _fs = require('fs')
const _path = require('path')
const _bodyParser = require('body-parser')
const _express = require('express')
const _app = _express()

_app.use(_bodyParser.json())
_app.use(_bodyParser.urlencoded())

_app.use('/api/user', _userApi)

_app.listen(3000)

console.log('success listen at port: 3000')
