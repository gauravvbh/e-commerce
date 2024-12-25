const cartService = require('../services/cart.service')


const findUserCart = async (req, res) => {
    try {
        const { user } = req;
        const cart = await cartService.findUserCart(user._id);
        console.log(cart)
        return res.status(200).send(cart);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const addCartItem = async (req, res) => {
    try {
        const { user } = req;
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(201).send(cartItem);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



module.exports = {
    findUserCart,
    addCartItem,
    // removeCartItem,
}