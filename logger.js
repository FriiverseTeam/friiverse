const colors = require('colors');

colors.enable();

function getCurrentTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const logger = {
    success: (message) => {
        console.log(colors.green(`[${getCurrentTimestamp()}] [SUCCESS] ${message}`));
    },
    info: (message) => {
        console.log(colors.blue(`[${getCurrentTimestamp()}] [INFO] ${message}`));
    },
    warn: (message) => {
        console.log(colors.yellow(`[${getCurrentTimestamp()}] [WARN] ${message}`));
    },
    error: (message) => {
        console.log(colors.red(`[${getCurrentTimestamp()}] [ERROR] ${message}`));
    },
    database: (message) => {
        console.log(colors.magenta(`[${getCurrentTimestamp()}] [DATABASE] ${message}`));
    }
};

module.exports = logger;