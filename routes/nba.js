import { Router } from 'express';
import { getNbaTeams } from '../utils.js';

export const router = Router();

router.get('/teams', async (req, res) => {
  try {
    const data = await getNbaTeams();
    res.json(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
