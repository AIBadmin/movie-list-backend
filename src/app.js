import express from 'express';
const app = express();

import cors from 'cors';
import multer from 'multer';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(multer().any());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"../", '/uploads')))
app.use('/api/v1',router);

export default app;