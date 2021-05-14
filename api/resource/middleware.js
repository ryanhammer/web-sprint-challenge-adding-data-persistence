const validateResource = (req, res, next) => {
  const name = req.body.resource_name;
  if (!name || name.trim().length === 0) {
    res.status(400).json({
      message: "missing resource_name"
    });
  } else {
    req.body.resource_name = name.trim();
    next();
  }
}

module.exports = { validateResource }