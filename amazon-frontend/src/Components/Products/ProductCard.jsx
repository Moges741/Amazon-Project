import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import {Link} from 'react-router-dom'
import styles from './products.module.css'
import { DataContext } from "../Data/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ products, flex,productDesc, renderAdd }) => {
  const { image, title, id, rating, price,description } = products;

const [state,dispatch] = useContext(DataContext);

const addToCart = () =>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item:{
      image,title,id,rating,price,description
    }
  })
}
  return (
    <div className={`${styles.container} ${flex ? styles.product_flexed : ""}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {productDesc && <div style={{ maxWidth: "450px" }}>{description}</div>}
        <div className={styles.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
