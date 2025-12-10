import React, { useState } from 'react';
import Layout from '../../LayOut/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import ProductCard from '../../Components/Products/ProductCard';
import styles from './result.module.css';
const Result = () => {
  const {categoryName} = useParams()
  const [results, setResults] = useState([]);
  axios.get(`${productUrl}/products/category${categoryName}`).then((res)=>{
    setResults(res.data)
  }).catch((err)=>{
    console.log("ERROR",err)
  })
  return (
    <Layout>
     <section>
      <h1 style={{padding: "30px"}}>Results</h1>
      <p style={{padding: "30px"}}>Category</p>
      <hr />
      <div className={styles.products_container}>{results?.map((product)=>{
        <ProductCard key={product.id} product={product}/>
      })
        }  </div>
     </section>
    </Layout>
  )
}
export default Result;
