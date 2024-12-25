const Cart = require('../models/cart.model');
const CartItem = require('../models/cartItem.model');
const Product = require('../models/product.model');



const createCart = async (user) => {
    const cart = await Cart.create({
        user
    });
    return cart;
};

const findUserCart = async (userId) => {
    // const cart = await Cart.findOne({ user: userId });
    // return (await cart.populate("cartItems")).populate("Product");
    const cart = await Cart.findOne({ user: userId }).populate({
        path: 'cartItems',
        populate: {
            path: 'product', // This should match the name in your schema
            model: 'Product' // Ensure this matches the name of the model
        }
    });
    return cart;   
}

const addCartItem = async (userId, reqBody) => {
    const cart = await Cart.findOne({ user: userId }).populate('cartItems');
    const product = await Product.findById(reqBody.productId);

    const existingCartItem = await CartItem.findOne({ cart: cart._id, product: product._id, userId });

    if (existingCartItem) {
        existingCartItem.quantity = reqBody.quantity;
        existingCartItem.price = reqBody.quantity * product.price;
        existingCartItem.totalDiscountedPrice = reqBody.quantity * product.discountedPrice;
        existingCartItem.discountPercent = Math.round(((existingCartItem.price - existingCartItem.totalDiscountedPrice) / existingCartItem.price) * 100);

        await existingCartItem.save();
    }
    else {
        const createdCartItem = await CartItem.create({
            cart: cart._id,
            product: product._id,
            userId,
            quantity: reqBody.quantity,
            size: reqBody.size,
            price: reqBody.quantity * product.price,
            totalDiscountedPrice: reqBody.quantity * product.discountedPrice,
            discountPercent: Math.round(((product.price - product.discountedPrice) / product.price) * 100),
        });
        cart.cartItems.push(createdCartItem);
    }


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
    return "item added to cart successfully"
}



module.exports = {
    createCart,
    findUserCart,
    addCartItem
};