const { Router } = require('express');
const subdomain = require('express-subdomain');
const { directoryResolver } = require('../middleware/directory-resolver');
const { checkBan } = require('../middleware/check-ban');
const { auth } = require('../middleware/console-auth');
const logger = require('../logger');
const dotenv = require('dotenv');
dotenv.config();

const router = Router();
const console = Router();

const show = require('./show');
const communities = require('./communities');
const users = require('./users');
const posts = require('./posts');
const activity = require('./activity');
const messages = require('./messages');
const notifications = require('./notifications');
const account = require('./account');

logger.info('Miiverse Middleware loaded!');

router.use(directoryResolver);
router.use(auth);
router.use(checkBan);

logger.info('Miiverse Routes loaded!');

router.use(subdomain(process.env.SBDMN_PORTAL, console));
router.use(subdomain(process.env.SBDMN_N3DS, console));

console.use('/titles/show', show);
console.use('/titles', communities);
console.use('/communities', communities);
console.use('/users', users);
console.use('/posts', posts);
console.use('/activity_feed', activity);
console.use('/friend_messages', messages);
console.use('/news', notifications);
console.use('/', account);

module.exports = router;