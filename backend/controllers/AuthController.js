import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({message: 'User already exists', success: false})
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password,10)
        await userModel.save()
        return res.status(201)
            .json({
                message: 'signup successful', 
                success: true
            })
    }catch(err){
        res.status(500)
            .json({
                message: 'INTERNAL SERVER ERROR', 
                success: false
            })
    }
}
const login = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        const errormsg = 'Email or password is incorrect'
        if(!user){
            return res.status(403)
                .json({
                    message: errormsg, 
                    success: false
                })
        }
        const isPasswordEql = await bcrypt.compare(password, user.password)
        if(!isPasswordEql){
            return res.status(403)
                .json({
                    message: errormsg, 
                    success: false
                })
        }
        const jwttoken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )
    
        res.status(201)
            .json({
                message: 'login Success', 
                success: true,
                jwttoken,
                email,
                name: user.name
            })
    }catch(err){
        return res.status(500)
            .json({
                message: 'INTERNAL SERVER ERROR', 
                success: false
            })
    }
}

export {signup,login}