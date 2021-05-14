const validateTask = (req, res, next) => {
  const description = req.body.task_description;
  const task_completed = req.body.task_completed;
  const project_id = req.body.project_id;
  if (!description || description.trim().length === 0) {
    res.status(400).json({
      message: "missing task_description"
    });
  } else if (!task_completed || typeof task_completed !== 'boolean') {
    res.status(400).json({
      message: "task_completed is required and must be a boolean"
    });
  } else if (!project_id || typeof project_id !== 'number') {
    res.status(400).json({
      message: "project_id is required and must be a number"
    });
  } else {
    req.body.task_description = description.trim();
    if (task_completed === true) {
      req.body.task_completed = 1;
    } else {
      req.body.task_completed = 0;
    }
    next();
  }
}

module.exports = { validateTask }