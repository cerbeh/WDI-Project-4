const router = require('express').Router();
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.post('/register', users.register);
router.post('/login', users.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show);

router.route('/users/:id/sessions')
  .post(secureRoute, users.sessionsCreate)
  .get(users.sessionsIndex);

router.get('/users', users.index);
router.get('/users/:id', users.show);

router.route('/users/:id/sessions/:sessionId')
  .get(users.sessionsShow)
  .put(users.sessionsUpdate);

module.exports = router;
