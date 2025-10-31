const { Router } = require('express');

const router = Router();

router.get('/my_news', async (req, res) => {
    res.render(req.directory + '/notifications.ejs');
});

module.exports = router;