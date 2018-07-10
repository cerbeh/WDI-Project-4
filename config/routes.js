const router = require('express').Router();
const user = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.post('/register', user.register);
router.post('/login', user.login);

router.route('/users/:id/sessions')
  .post(secureRoute, user.sessionsCreate)
  .get(user.sessionsIndex);

module.exports = router;
