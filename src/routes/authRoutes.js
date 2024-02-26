import { Router } from "express";
const router =Router();

import { login,register } from "../controller/auth/index.js";
import { checkAuth } from '../middleware/checkAuth.js';

router.post('/login',login);
router.post('/register',register);

export default router;
