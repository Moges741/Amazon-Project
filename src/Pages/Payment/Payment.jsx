import React from "react";
import Layout from "../../LayOut/Layout";
import { useContext } from "react";
import { DataContext } from "../../Components/Data/DataProvider";
import styles from "./Payment.module.css";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);
  console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

// for total price
    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleError = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <Layout>
      <div className={styles.payment__header}>Checkout {totalItem} items</div>
      <section className={styles.payment}>
        <div className={styles.payment__flex}>
          <h3>Delivery Address</h3>

          <div>
            <div> {user?.email} </div>
            <div>123 React Lane</div>
            <div>Los Angeles, CA</div>
          </div>
        </div>
        <hr />
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard products={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              <form action="">
                {/* Error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleError} />
                {/* Price */}
                <div className={styles.payment_price}>
                  <div>
                    <span style={{display: "flex", gap: "15px"}}>
                      <p>Total order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
