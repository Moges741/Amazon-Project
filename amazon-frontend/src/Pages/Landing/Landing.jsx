import React from 'react'
import CarouselPage from '../../Components/Caroursel/CarouselPage';
import Category from '../../Components/Categories/Category';
import Layout from '../../LayOut/Layout';
import Products from '../../Components/Products/Products.jsx';

const Landing = () => {
  return (
    <Layout>
      <CarouselPage />
      <Category />
  <Products/>
    </Layout>
  );
}

export default Landing;
