const express = require('express');

const Tasks = require('./model');

const { validateTask } = require('./middleware');

const router = express.Router()

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next)
});

router.post('/', validateTask, (req, res, next) => {
  Tasks.create(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.use( (err, req, res ) => {
  res.status(err.status || 500).json({
    note: "Something went wrong in the tasks router",
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
