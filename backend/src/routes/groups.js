import { getGroups } from '../controllers/groups.js'

export default async function teachersRoutes(fastify) {
  fastify.get('/groups', async (req, reply) => {
    const groups = await getGroups(fastify)
    reply.send(groups)
  })
}
