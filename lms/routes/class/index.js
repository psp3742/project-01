'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('./createpost'))
  fastify.register(require('./getclass'))

}