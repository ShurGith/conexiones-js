import { Router } from 'express';
import {pool} from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
const [rows] = await pool.query('SELECT * FROM users WHERE id = 1');
    console.log(rows);
    res.json(rows);
});

export default router;