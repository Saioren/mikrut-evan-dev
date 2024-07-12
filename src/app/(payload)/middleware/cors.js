import { cors as corsDomains } from '../cors';

export const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (Array.isArray(corsDomains) && corsDomains.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    next();
};
