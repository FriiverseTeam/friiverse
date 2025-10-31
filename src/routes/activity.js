const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.render(req.directory + '/activity.ejs');
});

module.exports = router;