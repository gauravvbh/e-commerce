
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import ProductPage from '../customer/pages/ProductPage/ProductPage'
import Navbar from '../customer/components/Navigation/Navbar'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
import PrivateRoute from './PrivateRoute'


export default function CustomerRouters() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<HomePage />} />
                    <Route path="register" element={<HomePage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/">
                        <Route path='/:levelOne/:levelTwo/:levelThree' element={<div><ProductPage /></div>} />
                        <Route path="product">
                            <Route
                                path=":productId"
                                element={<div><ProductDetails /></div>}
                            />
                        </Route>
                        <Route path="cart" element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="account">
                            <Route index element={<div>Account Page</div>} />
                            <Route path="order">
                                <Route index element={<div><Order /></div>} />
                                <Route path=":orderId" element={<div><OrderDetails /></div>} />
                            </Route>
                        </Route>
                        <Route path="payment">
                            <Route index element={<div>Payment Page</div>} />
                            <Route path=":orderId" element={<div><PaymentSuccess /></div>} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    );
}