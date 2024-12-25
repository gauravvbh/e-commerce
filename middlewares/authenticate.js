const jwtProvider = require('../utils/jwtProvider')
const userService = require('../services/user.service')



const authenticate = async (req, res, next) => {
    try {
        console.log("req.headers")
        console.log(req.headers)
        const token = req.headers.authorization?.split(' ')[1]
        console.log("token")
        console.log(token)
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' })
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        console.log("UserId extracted from token:", userId);
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        console.log("authentication done")
        next();
    }
    catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


module.exports = authenticate