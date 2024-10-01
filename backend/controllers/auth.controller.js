const userService = require('../services/user.service');
const jwtProvider = require('../utils/jwtProvider')
const cartService = require('../services/cart.service')
const bcrypt = require('bcrypt')



const register = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(newUser._id);

        await cartService.createCart(newUser)

        return res.status(201).json({
            message: 'User registered successfully',
            token: jwt
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message, message: 'Registration failed' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'User not found with this email' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(201).json({
            message: 'User logged in successfully',
            token: jwt
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message, message: 'Login failed' });
    }
}


module.exports = { register, login }