const router = require('express').Router();
const users = require('../controllers/users');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.post('/register', users.register);
router.post('/login', users.login);

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
