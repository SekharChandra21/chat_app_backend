import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// console.log("JWT_Token : ",process.env.JWT_SECRET)
export const generateToken = (userId, res) => {

    const jwt_Token = jwt.sign({ userId }, "secret", {
        expiresIn: "7d",
    });

    res.cookie("Jwt_Token", jwt_Token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
    return jwt_Token;
};