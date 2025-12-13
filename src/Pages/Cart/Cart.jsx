import React, { useContext } from "react";
import Layout from "../../LayOut/Layout";
import { DataContext } from "../../Components/Data/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import styles from "./cart.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          <div className={styles.carts_basket}>
            {basket?.length == 0 ? (
              <p>Opps! No item is in your cart</p>
            ) : (
              basket?.map((item, id) => {
                return (
                  <section className={styles.content_and_buttons}>
                    <div key={id}>
                      <ProductCard
                        products={item}
                        productDesc={true}
                        flex={true}
                        renderAdd={false}
                      />
                    </div>
                    <div className={styles.increment_decrement}>
                      <button
                        className={styles.increment}
                        onClick={() => increment(item)}
                      >
                        <IoIosArrowUp/>
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className={styles.decrement}
                        onClick={() => decrement(item.id)}
                      >
                        <IoIosArrowDown/>
                      </button>
                    </div>
                  </section>
                );
              })
            )}
          </div>
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
