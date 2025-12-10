import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./products.module.css"; 
const Products = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        console.log("ERROR: ", err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.product_container}>
      {products.map((singleProduct) => (
        <ProductCard
          key={singleProduct.id}
          product={singleProduct} 
        />
      ))}
    </section>
  );
};

export default Products;
