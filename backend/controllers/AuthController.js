import bcrypt from "bcrypt";
import UserModel from "../models/User.js";

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(409).json({message: 'User already exists', success: false})
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password,10)
        await UserModel.save()
        res.status(201).json({message: 'signup successful', success: true})
    }catch(err){
        res.status(500).json({message: 'INTERNAL SERVER ERROR', success: false})
    }
}

export default signup