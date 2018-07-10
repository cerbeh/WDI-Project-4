const User = require('../models/user');

function practicesIndex(req, res, next) {
  User
    .findById(req.currentUser._id)
    .populate('practices')
    .then(user => {
      return res.json(user.practices);
    })
    .catch(next);
}



module.exports = {
  index: practicesIndex
};
