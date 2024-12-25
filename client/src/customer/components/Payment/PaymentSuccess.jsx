import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        console.log('Auth State:', auth);
        console.log('Token:', localStorage.getItem("token"));

        // Redirect to login if JWT is not available
        if (!auth.jwt) {
            navigate('/login');
        }
    }, [location, auth, navigate]);

    return (
        <div>
            <p>Payment Success Page</p>
        </div>
    );
};

export default PaymentSuccess;
