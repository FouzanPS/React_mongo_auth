import { Router } from "express";
const router = Router();

router.get('/', (req,res) =>{
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