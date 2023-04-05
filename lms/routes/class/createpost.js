/*'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const client = await fastify.pg.connect()

    try {
      const { title, classId, professorName, subjectOutline } = request.body;
      const { authorization } = request.headers;
      const tokenkey = {
        kimcoding: 1,
        ecode: 2
      };
      const userId = tokenkey[authorization];

      if (!userId) {
        throw { statusCode: 403, message: '토큰x' };
      }
      if (!title) {
        throw { status: 401, message: '강의명 오류' };
      }

      // Map user IDs to professor IDs
      const professorIdMap = {
        1: 'prof1',
        2: 'prof2'
      };
      const professorId = professorIdMap[userId];

      if (!professorId) {
        throw { statusCode: 403, message: '권한 없음' };
      }

      const { rows } = await client.query(
        `INSERT INTO public.classes (classId, title, professorName, subjectOutline, role) VALUES ($1, $2, $3, $4, $5)`,
        [classId, title, professorName, subjectOutline, professorId]
      );

      reply.code(200).send(rows);
    } finally {
      client.release();
    }
  })
}*/


'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'POST',
    url: '/',
    handler: async function (request, reply) {
      const client = await fastify.pg.connect()

      try {
        const { title, classId, professorName, subjectOutline } = request.body;
        const { authorization } = request.headers;
        const tokenkey = {
          1: 1,
          2: 2
        };
        const role = tokenkey[authorization];

        if (!role) {
          throw { statusCode: 403, message: '토큰x' };
        }
        if (!title) {
          throw { status: 401, message: '강의명 오류' };
        }

        // Map user IDs to professor IDs
        const professorIdMap = {
          1: 'prof1',
          2: 'prof2'
        };
        const professorId = professorIdMap[role];

        if (!professorId) {
          throw { statusCode: 403, message: '권한 없음' };
        }

        const { rows } = await client.query(
          `INSERT INTO public.classes (classId, title, professorName, subjectOutline, role) VALUES ($1, $2, $3, $4, $5)`,
          [classId, title, professorName, subjectOutline, professorId]
        );

        reply.code(200).send(rows);
      } finally {
        client.release();
      }
    }
  })

  fastify.route({
    method: 'DELETE',
    url: '/:classId',
    handler: async function (request, reply) {
      const client = await fastify.pg.connect()

      try {
        const { classId } = request.body;
        const { authorization } = request.headers;
        const tokenkey = {
          1: 1,
          2: 2
        };
        const role = tokenkey[authorization];

        if (!role) {
          throw { statusCode: 403, message: '토큰x' };
        }

        // Map user IDs to professor IDs
        const professorIdMap = {
          1: 'prof1',
          2: 'prof2'
        };
        const professorId = professorIdMap[role];

        if (!professorId) {
          throw { statusCode: 403, message: '권한 없음' };
        }

        const { rows } = await client.query(
          `DELETE FROM public.classes WHERE classId=$1 AND role=$2`,
          [classId, professorId]
        );

        reply.code(200).send(rows);
      } finally {
        client.release();
      }
    }
  })
}

