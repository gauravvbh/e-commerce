const User = require('../models/user.model');
const bcrypt = require('bcrypt')
const jwtProvider = require('../utils/jwtProvider')




const createUser = async (userData) => {
    try {
        const { firstName, lastName, email, password } = userData;
        if (!firstName || !lastName || !email || !password) {
            throw new Error('Please provide all required fields');
        }
        const isUser = await User.findOne({ email });
        if (isUser) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        return newUser;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getUserByEmail = async (email) => {
    try {
        if (!email) {
            throw new Error('Please provide all required fields');
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getUserByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    getUserByToken,
    getAllUsers
}