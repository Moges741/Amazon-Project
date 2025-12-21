import React, { useEffect, useState } from 'react'
import Layout from '../../LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'
import ProductCard from '../../Components/Products/ProductCard'
import Spinner from '../../Components/Spinner/Spinner'
const ProductDetails = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading , setIsLoading] = useState(false)
useEffect(()=>{
  setIsLoading(true);
axios.get(`${productUrl}/products/${productId}`).then((res)=>{
  // console.log(res.data)
setProduct(res.data)
setIsLoading(false)
}).catch((err)=>{
  console.log("Error" , err)
  setIsLoading(false)
})
},[productId]);
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductCard
          products={product}
          flex={true}
          productDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetails;
