function directoryResolver(req, res, next) {
    req.timestamp = Date.now();
    if (req.subdomains.includes('portal')) {
        req.directory = 'portal';
    } else if (req.subdomains.includes('n3ds')) {
        req.directory = 'n3ds';
    } else {
        req.directory = 'portal';
    }
    const writeMethods = new Set(['POST', 'PUT', 'DELETE']);
    req.isWrite = writeMethods.has(req.method.toUpperCase());
    if (req.path === '/') {
        return res.redirect('/titles/show');
    }
    next();
}

module.exports = { directoryResolver };