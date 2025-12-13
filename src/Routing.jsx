import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth';
import Cart from './Pages/Cart/cart';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Result from './Pages/Results/Result';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payment />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/category/:categoryName' element={<Result/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
