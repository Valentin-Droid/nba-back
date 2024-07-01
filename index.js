import express from 'express';
import { router as nbaRouter } from './routes/nba.js';
import { corsMiddleware } from './middlewares.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);

// Route racine pour vérification rapide
app.get('/', (req, res) => {
  res.send('NBA API is running!');
});

app.use('/nba', nbaRouter);

// Gestion des erreurs globale
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
