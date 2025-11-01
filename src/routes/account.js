const { Router } = require('express');
const bcrypt = require('bcrypt');
const { pool } = require('../database');

const router = Router();

router.get('/login', (req, res) => {
    res.render(req.directory + '/account/login.ejs');
});

router.get('/register', (req, res) => {
    res.render(req.directory + '/account/register.ejs');
});

router.post('/register', async (req, res) => {
    const { nnid, displayname, password, birthdate, email } = req.body;

    if (!nnid || !displayname || !password || !birthdate || !email)
        return res.send('Missing fields');

    const hash = await bcrypt.hash(password, 10);

    try {
        await pool.query(
            'INSERT INTO users (nnid, displayname, password, birthdate, email) VALUES ($1, $2, $3, $4, $5)',
            [nnid, displayname, hash, birthdate, email]
        );
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.send('NNID already exists');
    }
});

router.post('/login', async (req, res) => {
    const { nnid, password } = req.body;

    const user = await pool.query('SELECT * FROM users WHERE nnid = $1', [nnid]);

    if (user.rowCount === 0) return res.send('NNID not found');

    const valid = await bcrypt.compare(password, user.rows[0].password);
    if (!valid) return res.send('Wrong password');

    req.session.user = {
        id: user.rows[0].id,
        nnid: user.rows[0].nnid,
        displayname: user.rows[0].displayname
    };

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;