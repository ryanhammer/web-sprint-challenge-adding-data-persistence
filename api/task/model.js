const db = require('../../data/dbConfig');

const getAll = async () => {
  const tasks = await db('tasks as t')
    .join('projects as p', 't.project_id', '=', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    .orderBy('t.task_id');
  
  tasks.forEach( task => {
    if (task.task_completed === 1) {
      task.task_completed === true;
    } else {
      task.task_completed === false;
    }
  });
  return tasks;
}

const getById = async (task_id) => {
  const task = await db('tasks').where({ task_id }).first();
  return task;
}

const create = async (task) => {

  const [task_id] = await db('tasks').insert(task);
  return getById(task_id);
}

module.exports = { getAll, getById, create }
