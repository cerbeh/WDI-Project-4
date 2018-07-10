const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function indexRoute(req, res, next) {
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'UNAUTHORIZED 😡' });
      }

      const token = jwt.sign({ sub: user._id}, secret, { expiresIn: '12h' });

      res.json({
        user,
        token,
        message: `Welcome back ${user.username}`
      });
    })
    .catch(next);
}

function sessionsCreate(req, res, next) {
  User.findById(req.currentUser._id)
    .then(user => {
      user.sessions.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function sessionsIndex(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user.sessions))
    .catch(next);
}

function sessionsShow(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      const session = user.sessions.filter(session => {
        return session._id.toString() === req.params.sessionId;
      })[0];
      res.json(session);
    })
    .catch(next);
}

function sessionsUpdate(req, res , next) {
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

function sessionsDelete(req, res, next) {
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
  index: indexRoute,
  show: showRoute,
  sessionsCreate: sessionsCreate,
  sessionsIndex: sessionsIndex,
  sessionsShow: sessionsShow,
  sessionsUpdate: sessionsUpdate,
  sessionsDelete: sessionsDelete,
  register,
  login
};
