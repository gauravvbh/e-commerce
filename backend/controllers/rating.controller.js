const ratingService = require('../services/rating.service')



const createRating = async (req, res) => {
    try {
        const { user } = req.user;
        const rating = await ratingService.createReview(req.body, user);
        return res.status(201).send(rating);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

const getAllRating = async (req, res) => {
    try {
        const { productId } = req.params;
        const ratings = await ratingService.getAllRating(productId);
        return res.status(201).send(ratings);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

module.exports = {
    createRating,
    getAllRating,  // add this line
};