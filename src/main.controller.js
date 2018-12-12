'use strict'

/**
 * Module dependencies
 *
 */
let config = require('./config/config')
// let commonConfig = require('./config/common')
// let homeConfig = require('./config/home')
// let HttpStatus = require('http-status-codes')
// let MAILGUN_API_KEY = config.mailgun.api_key
// let MAILGUN_DOMAIN = config.mailgun.domain
// let MAILGUN_EMAIL = config.mailgun.email
// let mailgun = require('mailgun-js')({
//   apiKey: MAILGUN_API_KEY,
//   domain: MAILGUN_DOMAIN
// })

/**
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index')
}

/** 
 * Send contact email
 *
 */
// module.exports.sendContactEmail = (req, res, next) => {
//   var data = {
//     from: req.body.email,
//     to: MAILGUN_EMAIL,
//     subject: req.body.name + ' sent a message from www.kearneyplumbinginc.com',
//     text: req.body.message
//   }

//   mailgun.messages().send(data, (error, body) => {
//     if (error) {
//       return next(error)
//     }

//     res.status(HttpStatus.OK)
//     res.send('ok')
//   })
// }
