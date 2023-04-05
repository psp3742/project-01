'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('./createre'))
  fastify.register(require('./getregist'))
  fastify.register(require('./delete'))
}
