const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    res.redirect('/titles');
});

router.get('/first', async (req, res) => {
    res.render(req.directory + 'first_run.ejs');
});

module.exports = router;