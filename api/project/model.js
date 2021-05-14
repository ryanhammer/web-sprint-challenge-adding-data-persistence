const db = require('../../data/dbConfig');

const getAll = async () => {
  const projects = await db('projects');
  projects.forEach(project => {
    if (project.project_completed === 1) {
      project.project_completed = true;
    } else {
      project.project_completed = false;
    }
  })
  return projects;
}

const getById = async (project_id) => {
  const project = await db('projects').where({ project_id }).first();
  if (project.project_completed === 1) {
    project.project_completed = true;
  } else {
    project.project_completed = false;
  }
  return project;
}

const create = async (project) => {

  const [project_id] = await db('projects').insert(project);
  return getById(project_id);
}

module.exports = { getAll, getById, create }