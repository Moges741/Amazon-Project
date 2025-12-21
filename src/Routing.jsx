import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders';
import Result from './Pages/Results/Result';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'; // we can check it from stripe reactJs documentation
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51Se0lmK0YwnsLXqzM3Y3R3WNjkt3lxTwHtsjnRsSV1MUxVyCAT861JzSp6NJCcsKs72YlvZnS5xcKiACh8TCk73x00JzzOruYB"
  );
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
 
          <Route path="/orders" element={
            <ProtectedRoute msg={"You must log in to see your orders"} redirect={"/orders"}>
 <Orders />
 </ProtectedRoute>
            } />
          <Route path="/category/:categoryName" element={<Result />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
