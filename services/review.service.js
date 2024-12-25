async function createReview(reqData, user) {
    const product = await productService.findProductById(reqData.product);
    if (!product) {
        throw new Error('Product not found');
    }
    const review = new Review({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date()
    });
    await review.save();
}

async function getAllReview(productId) {
    const product = await productService.findProductById(productId);
    return await Review.find({ product: productId }).populate("user");
}

module.exports = {
    createReview,
    getAllReview,
};
