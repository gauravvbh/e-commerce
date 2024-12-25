const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const { dbConnect } = require('./config/dbConnect')
const reviewRoutes = require("./routes/review.route");
const adminOrderRoutes = require("./routes/adminOrder.route");
const orderRoutes = require("./routes/order.route");
const cartItemRoutes = require("./routes/cartItem.route");
const cartRoutes = require("./routes/cart.route");
const adminProductRoutes = require("./routes/adminProduct.route");
const productRoutes = require("./routes/product.route");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const ratingRoutes = require("./routes/rating.route");
const paymentRoutes = require("./routes/payment.route");

dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Authorization', 'Content-Type'], // Include the headers used by your requests
    credentials: true, // Allow cookies or authentication headers to be sent
}));


app.use((req, res, next) => {
    const method = req.method;
    const route = req.originalUrl;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${route}`);
    next(); // Pass control to the next middleware/handler
});


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin/products', adminProductRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/cart_items', cartItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/payment', paymentRoutes);

app.use(express.static(__dirname + '/client/dist'));

app.get('*', (req, res) => res.sendFile(__dirname + '/client/dist/index.html'))




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})