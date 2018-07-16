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
      const session = user.sessions.filter(session => {
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
      user.sessions.findById(req.params.sessionId)
        .then(session => console.log(session));
      //Logic to find the session that was edited and update it.
    })
    // .then(session /*    ?    */ => res.json(session))
    .catch(next);
}



/*
Previous attempts at trying to make it  work when reading the mongoose docs

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

function updateRoute(req, res , next) {
  User.findById(req.params.id)
    .then(user => {
      let updatedSession;
      user.sessions.map(session => {
        if(session._id.toString() === req.params.sessionId) {
          session.title = req.body.title;
          session.discipline = req.body.discipline;
          session.duration = req.body.duration;
          session.notes = req.body.notes;
          return updatedSession = session;
        }
        return session;
      });
      user.save();
      res.json(updatedSession);
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
