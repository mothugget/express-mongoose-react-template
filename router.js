'use strict';
import express from 'express';
import { getStuff, postStuff } from './controllers/stuffController.js';
const router = express.Router();

router.get('/stuff', getStuff);
router.post('/stuff', postStuff);

export default router;