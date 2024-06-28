import cors from 'cors';

export const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};

export const corsMiddleware = cors(corsOptions);

export function logger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  }
  