const { Router } = require('express');
const { requireLogin } = require('../middleware/require-login');
const { pool } = require('../database');

const router = Router();

router.get('/', requireLogin, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM communities ORDER BY created_at DESC');
    const communities = result.rows;

    const theme = req.cookies?.grp_theme || 'green';
    const themeLabel = theme.charAt(0).toUpperCase() + theme.slice(1);

    res.render(req.directory + '/communities.ejs', {
      communities,
      theme,
      themeLabel
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/all', requireLogin, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM communities ORDER BY created_at DESC');
    const communities = result.rows;
    
    res.render(req.directory + '/all_communities.ejs', { communities });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', requireLogin, async (req, res) => {
  try {
    const communityId = req.params.id;
    const result = await pool.query('SELECT * FROM communities WHERE id = $1', [communityId]);

    if (result.rows.length === 0) {
      return res.status(404).send('NOPE');
    }

    const community = result.rows[0];
    res.render(req.directory + '/page_community.ejs', { community });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;