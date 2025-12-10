
import React, { useEffect, useState } from "react";
import Layout from "../../LayOut/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Products/ProductCard";
import styles from "./result.module.css";
import Spinner from "../../Components/spinner/Spinner";

const Result = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        // Fake Store API endpoint for category products
        const response = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );

        // Fake Store API returns an array directly, not an object with products property
        setResults(response.data || []);
        setError(null);
      } catch (err) {
        console.log("ERROR", err);
        setError("Failed to load products");
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchCategoryProducts();
    }
  }, [categoryName]); // Removed productUrl from dependencies since it's likely a constant

  if (loading) {
    return (
      <Layout>
        <div className={styles.loading}>Loading {categoryName} products...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className={styles.error}>{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {loading?(
        <Spinner/>):(
          <div className={styles.products_container}>
            {results.map((products) => (
              <ProductCard key={products.id} products={products} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Result;
