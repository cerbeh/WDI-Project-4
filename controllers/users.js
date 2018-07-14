const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


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
    .populate('sessions')
    .then(user => res.json(user))
    .catch(next);
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => Object.assign(user, req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `You've successfully registered, ${user.username}. Please login`,
        token,
        user
      });
    })
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'UNAUTHORIZED 😡' });
      }

      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' });

      res.json({
        user,
        token,
        message: `Welcome back ${user.username}`
      });
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  register,
  login
};
