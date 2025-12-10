import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard';
import styles from './products.module.css'
import Spinner from '../spinner/Spinner';
const Products = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() =>{
    (
      async() =>{
        try{
          const request = await axios.get("https://fakestoreapi.com/products");
          setProduct(request.data);
       setIsLoading(false);
        }catch(err){
          console.log("ERROR : ",err);
          setIsLoading(false);
        }
      }
    )();
  },[])
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={styles.product_container}>
          {products.map((singleProduct) => {
            return (
              <ProductCard products={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}
export default Products
