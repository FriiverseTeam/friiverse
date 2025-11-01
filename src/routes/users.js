const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');

const router = Router();

router.get('/me', requireLogin, (req, res) => {
    res.render(req.directory + '/me.ejs', { user: req.session.user });
});

module.exports = router;