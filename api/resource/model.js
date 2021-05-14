const db = require('../../data/dbConfig');

const getAll = () => {
  return db('resources');
}

const getById = async (resource_id) => {
  const resource = await db('resources').where({ resource_id }).first();
  return resource;
}

const create = async (resource) => {

  const [resource_id] = await db('resources').insert(resource);
  return getById(resource_id);
}

module.exports = { getAll, getById, create }
