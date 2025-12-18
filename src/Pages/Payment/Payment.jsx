import Layout from "../../LayOut/Layout";
import { useContext } from "react";
import { DataContext } from "../../Components/Data/DataProvider";
import styles from "./Payment.module.css";
import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
  //  to make loading on payment
  const [processing, setProcessing] = useState(false);
  // for total price
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleError = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // 1. backend || function <---> contact to client secret
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      //2. client side (react side ) confirmation .....
      setProcessing(true);
      const clientSecret = response.data?.clientSecret;
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      const paymentIntent = confirmation.paymentIntent;

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      setProcessing(false);
      
    } catch (error) {
      setProcessing(true);
      console.log("ERROR : --> ", error);
      setProcessing(false);
  navigate("/orders", {state: {msg: "you have ordered successfully!"}})
    }
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
              <form onSubmit={handlePayment} action="">
                {/* Error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleError} />
                {/* Price */}
                <div className={styles.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "15px" }}>
                      <p>Total order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={styles.loader}>
                        <ClipLoader color="gray" size={16} />
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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
