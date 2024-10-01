const userService = require('../services/user.service')



const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        if (!jwt) {
            return res.status(401).json({ message: "Token not found" })
        }
        const user = await userService.getUserByToken(jwt);
        return res.status(200).json({
            // user: user.toObject()
            user
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json({
            users
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}



module.exports = { getUserProfile, getAllUsers };