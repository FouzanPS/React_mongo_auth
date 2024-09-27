import { Router } from "express";
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import { signup, login } from "../controllers/AuthController.js";
signup

const router = Router()


router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)

export default router