const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');

const router = Router();

router.get('/', requireLogin, async (req, res) => {
    res.render(req.directory + '/communities.ejs');
});

router.get('/all', requireLogin, async (req, res) => {
    res.render(req.directory + '/all_communities.ejs');
});

module.exports = router;