import ensureAuthenticated from "../middlewares/Auth.js";
import { Router } from "express";
const router = Router();

router.get('/', ensureAuthenticated, (req,res) =>{
    console.log("...Logged data...",req.user.email)
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 25000
        }
    ])
})

export default router;