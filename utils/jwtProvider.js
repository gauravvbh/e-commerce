const dotenv = require('dotenv');
dotenv.config()
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
    try {
        const token = jwt.sign(
            { userId },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES }
        );
        return token;
    } catch (error) {
        console.log("generateToken error")
        console.log(error)
    }
}


const getUserIdFromToken = (token) => {
    try {
        console.log("Token received in getUserIdFromToken:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded?.userId;
    } catch (error) {
        console.log("getUserIdFromToken error")
        console.log(error)
    }
}

module.exports = { generateToken, getUserIdFromToken }