const database = require('../database');

async function checkBan(req, res, next) {
    if (!req.session || !req.session.user) {
        return next();
    }
    const result = await database.pool.query(
        'SELECT banned FROM users WHERE id = $1',
        [req.session.user.id]
    );
    if (result.rows.length > 0 && result.rows[0].banned) {
        return res.status(403).render(req.directory + '/banned.ejs');
    }
    next();
}

module.exports = { checkBan };