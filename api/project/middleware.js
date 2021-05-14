const validateProject = (req, res, next) => {
  const name = req.body.project_name;
  const project_completed = req.body.project_completed;
  if (!name || name.trim().length === 0) {
    res.status(400).json({
      message: "missing project_name"
    });
  } else if (!project_completed || typeof project_completed !== 'boolean') {
    res.status(400).json({
      message: "project_completed is required and must be a boolean"
    });
  } else {
    req.body.project_name = name.trim();
    if (project_completed === true) {
      req.body.project_completed = 1;
    } else {
      req.body.project_completed = 0;
    }
    next();
  }
}

module.exports = { validateProject }