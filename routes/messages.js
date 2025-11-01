const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');

const router = Router();

router.get('/', requireLogin, async (req, res) => {
    res.render(req.directory + '/messages.ejs');
});

module.exports = router;