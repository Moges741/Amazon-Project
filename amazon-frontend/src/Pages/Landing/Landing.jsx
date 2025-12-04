import React from 'react'
import CarouselPage from '../../Components/Caroursel/CarouselPage';
import Category from '../../Components/Categories/Category';
import Products from '../../Components/Products/Products';
import Layout from '../../LayOut/Layout';

const Landing = () => {
  return (
    <Layout>
      <CarouselPage />
      <Category />
      <Products />
    </Layout>
  );
}

export default Landing
