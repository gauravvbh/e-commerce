const cartItemService = require('../services/cartItem.service')



const updateCartItem = async (req, res) => {
    try {
        const { user } = req;
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(200).json(updatedCartItem);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const removeCartItem = async (req, res) => {
    try {
        const { user } = req;
        await cartItemService.removeCartItem(user._id, req.params.id);
        return res.status(200).send({ message: 'Cart item removed successfully' });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    updateCartItem,
    removeCartItem
}