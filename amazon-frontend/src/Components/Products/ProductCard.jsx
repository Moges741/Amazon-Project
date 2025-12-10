import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import {Link} from 'react-router-dom'
import styles from "./products.module.css";
const ProductCard = ({ product }) => {
  // Changed from 'products' to 'product'
  const { image, title, id, rating, price } = product; // Changed from 'products' to 'product'
  return (
    <div className={styles.productCard}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className={styles.productImage} />
      </Link>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small className={styles.ratingCount}>({rating?.count || 0})</small>
        </div>
        <div className={styles.price}>
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.addToCartButton}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
