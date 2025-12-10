import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp';
import Cart from './Pages/Cart/cart';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Result from './Pages/Results/Result';

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payment />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/category/:categoryName' element={<Result/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default Routing
