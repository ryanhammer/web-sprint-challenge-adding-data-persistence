const express = require('express');

const Projects = require('./model');

// const { checkCarPayload, checkVinNumberValid, checkCarId, checkVinNumberUnique } = require('./cars-middleware');

const router = express.Router()

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next)
});

router.post(
  '/',
  // checkCarPayload,
  // checkVinNumberValid,
  // checkVinNumberUnique,
  (req, res, next) => 
  {
    Projects.create(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(next);
  }
);

router.use( (err, req, res ) => {
  res.status(err.status || 500).json({
    note: "Something went wrong in the projects router",
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;