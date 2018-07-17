const router = require('express').Router();
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.route('/users/:id/sessions')
  .get(sessions.index)
  .post(secureRoute, sessions.create);

router.route('/users/:id/sessions/:sessionId')
  .get(sessions.show)
  .put(secureRoute, sessions.update)
  .delete(secureRoute, sessions.delete);

module.exports = router;
