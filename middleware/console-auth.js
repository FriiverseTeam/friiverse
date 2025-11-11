async function auth(req, res, next) {
    req.directory = req.subdomains[1];
    return next();
}

module.exports = { auth };