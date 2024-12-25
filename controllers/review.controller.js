const reviewService = require('../services/review.service')


const createReview=async (req, res) => {
    try{
        const {user}=req.user;
        const review = await reviewService.createReview(req.body,user);
        return res.status(201).send(review);
    }
    catch(err){
        return res.status(400).send(err);
    }
}

const getAllReview=async (req, res) => {
    try{
        const { productId }=req.params;
        const review = await reviewService.getAllReview(productId);
        return res.status(201).send(review);
    }
    catch(err){
        return res.status(400).send(err);
    }
}


module.exports={createReview, getAllReview};