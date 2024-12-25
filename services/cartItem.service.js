const userService = require('../services/user.service')
const CartItem = require('../models/cartItem.model')
const Cart = require('../models/cart.model')


const updateCartItem = async (userId, cartItemId, cartItemData) => {
    // console.log(userId)
    // console.log(cartItemId)
    // console.log(cartItemData)
    try {
        const item = await findCartItemById(cartItemId);
        if (!item) {
            throw new Error('Cart item not found');
        }
        const user = await userService.getUserById(item.userId);
        if (!user) {
            throw new Error('User not found');
        }
        if (user._id.toString() !== userId.toString()) {
            throw new Error('Unauthorized access');
        }
        else {
            item.quantity = cartItemData.quantity ? cartItemData.quantity : item.quantity;
            item.price = cartItemData.quantity * item.product.price;
            item.totalDiscountedPrice = cartItemData.quantity * item.product.discountedPrice;
            item.discountPercent = Math.round(((item.price - item.totalDiscountedPrice) / item.price) * 100);
            const updatedCart = await item.save();


            const cart = await Cart.findOne({ user: userId }).populate('cartItems');

            let totalPrice = 0;
            let totalDiscountedPrice = 0;
            let totalItems = 0;

            for (const item of cart.cartItems) {
                const itemDoc = await CartItem.findById(item._id);
                totalPrice += itemDoc.price;
                totalDiscountedPrice += itemDoc.totalDiscountedPrice;
                totalItems += itemDoc.quantity;
            }

            cart.totalPrice = totalPrice;
            cart.totalDiscountedPrice = totalDiscountedPrice;
            cart.totalDiscount = totalPrice > 0 ? Math.round(((totalPrice - totalDiscountedPrice) / totalPrice) * 100) : 0;
            cart.totalItems = totalItems;

            await cart.save();



            return updatedCart;
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const removeCartItem = async (userId, cartItemId) => {
    try {
        const cartItem = await findCartItemById(cartItemId);
        const user = await userService.getUserById(userId);

        if (user._id.toString() === cartItem.userId.toString()) {
            await CartItem.findByIdAndDelete(cartItemId);


            const cart = await Cart.findOne({ user: userId }).populate('cartItems');

            let totalPrice = 0;
            let totalDiscountedPrice = 0;
            let totalItems = 0;

            for (const item of cart.cartItems) {
                const itemDoc = await CartItem.findById(item._id);
                totalPrice += itemDoc.price;
                totalDiscountedPrice += itemDoc.totalDiscountedPrice;
                totalItems += itemDoc.quantity;
            }

            cart.totalPrice = totalPrice;
            cart.totalDiscountedPrice = totalDiscountedPrice;
            cart.totalDiscount = totalPrice > 0 ? Math.round(((totalPrice - totalDiscountedPrice) / totalPrice) * 100) : 0;
            cart.totalItems = totalItems;

            await cart.save();



            return "Cart item removed successfully";
        }
        else {
            throw new Error("Unauthorized access");
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const findCartItemById = async (cartItemId) => {
    const item = await CartItem.findById(cartItemId).populate("product");
    if (!item) {
        throw new Error('Cart item not found');
    }
    return item;
}



module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}