import { Router } from "express";
import { loginValidation, signupValidation } from '../middlewares/AuthValidation.js';
import signup from "../controllers/AuthController.js";

const router = Router()

router.post('/login', (req, res) => {
    res.send("login successfull");
})

router.post('/signup', signupValidation, signup)

export default router