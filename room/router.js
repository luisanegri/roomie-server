const { Router } = require('express');
const Room = require('./model');
const router = new Router();

router.post('/room', (req, res, next) => {
  Room.create(req.body)
    .then(room => res.send(room))
    .catch(error => next(error));
});

router.get('/room', (req, res, next) => {
  Room.findAll()
    .then(room => res.send(room))
    .catch(error => next(error));
});

router.get('/room/:roomId', (req, res, next) => {
  Room.findByPk(req.params.roomId)
    .then(room => {
      if (!room) {
        res.status(404).end();
      } else {
        res.status(201).json(room);
      }
    })
    .catch(error => next(error));
});

module.exports = router;
