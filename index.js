'use strict'
var assert = require('assert')
var _ = require('lodash')

var StatusManager = function (options) {
  assert(_.isObject(options))
  assert(_.isObject(options.platform))
  assert(_.isObject(options.logger))
  this.platform = options.platform
  this._log = options.logger
  this.platform.messaging.on('self.transports.online', this._onOnline.bind(this))
  this.platform.messaging.on('self.transports.failed', this._onOffline.bind(this))
  this.platform.messaging.on('self.status.requestStatus', this._onRequest.bind(this))
}

StatusManager.prototype._onRequest = function (topic, publicKey, data) {
  this.platform.messaging.send('status.ping', data, {})
}

StatusManager.prototype._onOnline = function (topic, publicKey, data) {
  this.platform.messaging.send('status.online', 'local', data)
}

StatusManager.prototype._onOffline = function (topic, publicKey, data) {
  this.platform.messaging.send('status.offline', 'local', data)
}

module.exports = StatusManager
