import { Router } from "express";
const router =Router();

import authRoutes from './authRoutes.js'
router.use('/auth',authRoutes);

import movieRoutes from './movieRoutes.js'
router.use('/movie',movieRoutes);

export default router;
