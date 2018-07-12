const User = require('../models/user');
const Session = require('../models/session');

function createRoute(req, res, next) {
  req.body.creator = req.currentUser._id;
  Session.create(req.body)
    .then(session => res.json(session))
    .catch(next);
}

function indexRoute(req, res, next) {
  User.findById(req.params.id)
    .populate('sessions')
    .then(user => res.json(user.sessions))
    .catch(next);
}

function showRoute(req, res, next) {
  Session.findById(req.params.sessionId)
    .then(session => res.json(session))
    .catch(next);
}

function updateRoute(req, res , next) {
  Session.findById(req.params.sessionId)
    .then(session => {
      session.set(req.body);
      session.save();
      res.json(session);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  Session.findById(req.params.sessionId)
    .then(session => session.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: createRoute,
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
