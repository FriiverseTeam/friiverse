const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.render(req.directory + '/messages.ejs');
});

module.exports = router;