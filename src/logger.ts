import colors from 'colors';

colors.enable();

function getCurrentTimestamp(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

type Logger = {
    success: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
    database: (message: string) => void;
};

export const logger: Logger = {
    success: (message: string) => {
        console.log(colors.green(`[${getCurrentTimestamp()}] [SUCCESS] ${message}`));
    },
    info: (message: string) => {
        console.log(colors.blue(`[${getCurrentTimestamp()}] [INFO] ${message}`));
    },
    warn: (message: string) => {
        console.log(colors.yellow(`[${getCurrentTimestamp()}] [WARN] ${message}`));
    },
    error: (message: string) => {
        console.log(colors.red(`[${getCurrentTimestamp()}] [ERROR] ${message}`));
    },
    database: (message: string) => {
        console.log(colors.cyan(`[${getCurrentTimestamp()}] [DATABASE] ${message}`));
    }
};