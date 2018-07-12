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
  console.log(req.body);
  User.findById(req.params.id)
    .then(user => {
      user.update({ 'sessions._id': req.params.sessionId },
        { '$set': {
          'sessions.$.title': req.body.title
        },
        new: true });
      res.json(user.sessions);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      user.sessions.forEach((session, index) => {
        if(session._id.toString() === req.params.sessionId) {
          user.sessions.splice(index, 1);
        }
      });
      user.save();
      res.json(user.sessions);
    })
    .catch(next);
}

module.exports = {
  create: createRoute,
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
