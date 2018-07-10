const router = require('express').Router();
const user = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.post('/register', user.register);
router.post('/login', user.login);

router.route('/users/:id/sessions')
  .post(secureRoute, user.sessionsCreate)
  .get(user.sessionsIndex);

router.get('/users', user.index);
router.get('/users/:id', user.show);

router.route('/users/:id/sessions/:sessionId')
  .get(user.sessionsShow)
  .put(user.sessionsUpdate)
  .delete(user.sessionsDelete);

module.exports = router;
