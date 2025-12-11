import React from 'react'
import CarouselPage from '../../Components/Caroursel/CarouselPage';
import Category from '../../Components/Categories/Category';
import Layout from '../../LayOut/Layout';
import Products from '../../Components/Products/Products.jsx';
import Footer from '../../Components/Footer/footer.jsx';

const Landing = () => {
  return (
    <Layout>
      <CarouselPage />
      <Category />
  <Products/>
  <Footer/>
    </Layout>
  );
}

export default Landing;
