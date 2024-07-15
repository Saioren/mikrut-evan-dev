import { cors as corsDomains } from '../cors';

export const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        // Handle preflight requests
        res.header('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_APP_URL); // or specific origins if you need
        res.sendStatus(200);
        return;
    }

    if (Array.isArray(corsDomains) && corsDomains.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }

    next();
};
