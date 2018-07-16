const User = require('../models/user');


function createRoute(req, res, next) {
  User.findById(req.params.id)
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
      const session = user.sesssions.filter(session => {
        return session._id.toString() === req.params.sessionId;
      })[0];
      res.json(session);
    })
    .catch(next);
}

//THIS ONE IS THE ONE THAT DOESNT WORK.
function updateRoute(req, res , next) {
  User.findById(req.params.id)
    .then(user => {
      session.set(req.body);
      session.save();
      res.json(session);
    })
    .catch(next);
}

/*
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
*/


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
