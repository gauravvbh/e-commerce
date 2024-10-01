const dotenv = require('dotenv');
dotenv.config()
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES }
    );
    return token;
}

const getUserIdFromToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded?.userId;
}

module.exports = { generateToken, getUserIdFromToken }