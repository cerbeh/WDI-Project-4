const User = require('../models/User');

function register(req, res, next) {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  register
};
