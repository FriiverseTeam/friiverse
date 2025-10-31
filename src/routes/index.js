const { Router } = require('express');
const subdomain = require('express-subdomain');
const { directoryResolver } = require('../middleware/directory-resolver');

const router = Router();
const console = Router();

const show = require('./show');
const communities = require('./communities');
const users = require('./users');
const posts = require('./posts');
const activity = require('./activity');
const messages = require('./messages');
const notifications = require('./notifications');

router.use(directoryResolver);

router.use(subdomain('portal', console));
router.use(subdomain('n3ds', console));

console.use('/titles/show', show);
console.use('/titles', communities);
console.use('/communities', communities);
console.use('/users', users);
console.use('/posts', posts);
console.use('/activity_feed', activity);
console.use('/friend_messages', messages);
console.use('/news', notifications);

module.exports = router;