const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');

const router = Router();

router.get('/', requireLogin, async (req, res) => {
    res.redirect('/titles');
});

module.exports = router;