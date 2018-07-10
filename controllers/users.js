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
      console.log(user);
    })
    .catch(next);
}

// function sessionsUpdate(req, res , next) {
//
// }

module.exports = {
  index: indexRoute,
  show: showRoute,
  sessionsCreate: sessionsCreate,
  sessionsIndex: sessionsIndex,
  sessionsShow: sessionsShow,
  register,
  login
};