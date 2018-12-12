'use strict'

/**
 * Module dependencies
 *
 */
let express = require('express')
let router = express.Router()
let controller = require('./main.controller')

// Define the application routes
router.get('/', controller.getHome)
// router.post('/contact/send-email', controller.sendContactEmail)

module.exports = router
