import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
dotenv.config();

export const protectRoute = async (req, res, next) =>{
    try{
        const token = req.cookies.Jwt_Token;

        if(!token){
            return res.status(401).json({message: "Unauthorized access - No Token Provided"});
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message: "Unauthorized access - Invalid Token"});
        }

        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        req.user = user;
        next();

    }catch(error){
        console.log(error.message);
        return res.status(500).json({msg: "Internal server error"});
    }
}