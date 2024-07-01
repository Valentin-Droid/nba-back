import cors from 'cors';

const allowedOrigins = [
  'http://localhost:3001',
  'https://nba-front-ten.vercel.app',
];

export const corsOptions = {
  origin: function (origin, callback) {
    // Permettre les requêtes sans origine (comme les appels d'API mobile)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

export const corsMiddleware = cors(corsOptions);

export function logger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
}
