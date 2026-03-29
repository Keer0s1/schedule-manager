import { groupsQueries } from '../db/queries.js'

export const getGroups = async (fastify) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(groupsQueries.getAll)
    return rows
  }
  finally {
    client.release()
  }
}
