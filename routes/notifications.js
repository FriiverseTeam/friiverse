const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');

const router = Router();

router.get('/my_news', requireLogin, async (req, res) => {
    res.render(req.directory + '/notifications.ejs');
});

module.exports = router;