const User = require('../models/user');

function indexRoute(req, res, next) {
  User
    .find()
    .populate('sessions')
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

// PUT /users/:id/sessions/:sessionId


module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute
};
