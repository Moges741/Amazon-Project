import React, { useEffect, useState } from 'react'
import Layout from '../../LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'
import ProductCard from '../../Components/Products/ProductCard'

const ProductDetails = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
useEffect(()=>{
axios.get(`${productUrl}/products/${productId}`).then((res)=>{
  // console.log(res.data)
setProduct(res.data)
}).catch((err)=>{
  console.log("Error" , err)
})
})
  return (
    <Layout>
     <ProductCard  products={product}/>
    </Layout>
  )
}

export default ProductDetails;
