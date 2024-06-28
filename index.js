import express from 'express';
import { router as nbaRouter } from './routes/nba.js';
import { corsMiddleware } from './middlewares.js';
import 'dotenv/config';


const app = express();
const PORT = 3000;

app.use(corsMiddleware);
app.use('/nba', nbaRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
