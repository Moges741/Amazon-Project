import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard';
import styles from './products.module.css'
const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() =>{
    (
      async() =>{
        try{
          const request = await axios.get("https://fakestoreapi.com/products")
          setProduct(request.data);
        }catch(err){
          console.log("ERROR : ",err)
        }
      }
    )();
  },[])
  return (
  <section className={styles.product_container}>
    {
    products.map((singleProduct) =>{
      return <ProductCard products={singleProduct} key={singleProduct.id}/>
    })
    }
  </section>
  )
}
export default Products
