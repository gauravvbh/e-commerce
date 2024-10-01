const jwtProvider=require('../utils/jwtProvider')
const userService=require('../services/user.service')



const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' })
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = await userService.getUserById(userId);
        req.user = user;
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
    next();
}


module.exports = authenticate