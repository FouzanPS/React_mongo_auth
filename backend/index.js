import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import MONGODB from './models/db.js';
import AuthRouter from './routes/AuthRouter.js';
import ProductRouter from './routes/ProductRouter.js';

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000

MONGODB()

app.get('/', (req, res) => {
    res.send("Server running")
})

app.use(bodyParser.json()); //converts the user input in json format
app.use(cors()); //Cors is used to access this server from any ip address.
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)


app.listen(PORT, () => {
    console.log("Server is running on the port: " + PORT)
});