import React from 'react'
import Layout from '../../LayOut/Layout'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const {productId} = useParams()
  console.log(productId)
  return (
    <Layout>
      Product Detail
    </Layout>
  )
}

export default ProductDetails
