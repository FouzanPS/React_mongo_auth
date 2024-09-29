import { Router } from "express";
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import { signup, login } from "../controllers/AuthController.js";
signup

const router = Router()


router.post('/login', loginValidation, login) //loginvalidation will occur and then it will be sent to login in controller file.

router.post('/signup', signupValidation, signup) // same process for signup aswell

export default router