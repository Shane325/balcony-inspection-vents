'use strict'

/**
 * Module dependencies.
 */
let fs = require('fs')
let path = require('path')
let _ = require('lodash')

/**
 * Initialize global configuration
 */
let initGlobalConfig = () => {
  // Get the default assets
  let defaultAssets = require(path.join(process.cwd(), 'src/config/assets/default')) || {}

  // Get the environment assets
  let environmentAssets = require(path.join(process.cwd(), 'src/config/assets/', process.env.NODE_ENV)) || {}

  // Get the environment config
  let environmentConfig = require(path.join(process.cwd(), 'src/config/env/', process.env.NODE_ENV)) || {}

  let config = _.merge(defaultAssets, environmentAssets, environmentConfig)

  return config
}

module.exports = initGlobalConfig()
