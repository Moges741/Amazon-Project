import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import {Link} from 'react-router-dom'
import styles from './products.module.css'

const ProductCard = ({ products }) => {
  const { image, title, id, rating, price } = products;
  return (
    <div className={styles.container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
