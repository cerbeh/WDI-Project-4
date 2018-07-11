const User = require('../models/user');

function createRoute(req, res, next) {
  User.findById(req.currentUser._id)
    .then(user => {
      user.sessions.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function indexRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user.sessions))
    .catch(next);
}

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      const session = user.sessions.filter(session => {
        return session._id.toString() === req.params.sessionId;
      })[0];
      res.json(session);
    })
    .catch(next);
}

function updateRoute(req, res , next) {
  console.log(req.body);
  User.findById(req.params.id)
    .then(user => {
      user.update({ 'sessions._id': req.body.sessionId },
        { '$set': {
          'sessions.$.title': req.body.title
        }},
      );

      // user.update({ 'sessions.$': req.params.sessionId },
      //   {'$set': {
      //     'sessions.$.title': req.body.title
      //   }}
      // );
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
