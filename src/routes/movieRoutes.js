import { Router } from "express";
const router = Router();

import { createMovie, listMovie, editMovie, listSingleMovie } from "../controller/movie/index.js";
import { checkAuth } from '../middleware/checkAuth.js';


router.post('/createMovie', checkAuth, createMovie);
router.get('/listMovie', checkAuth, listMovie);
router.get('/listMovie/:id', checkAuth, listSingleMovie);
router.patch('/editMovie/:id', checkAuth, editMovie);

export default router;
