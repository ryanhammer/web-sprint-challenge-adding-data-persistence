const express = require('express');

const Resources = require('./model');

const { validateResource } = require('./middleware');

const router = express.Router()

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(next)
});

router.post('/', validateResource, (req, res, next) => {
  Resources.create(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.use( (err, req, res ) => {
  res.status(err.status || 500).json({
    note: "Something went wrong in the resources router",
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;