// IMPORT ROUTER.
const router = require('express').Router()

const HelloWorldsController = require('./controllers/HelloWorld.controller')

router.route('/hello-world').get(HelloWorldsController.getHelloWorld)

module.exports = router