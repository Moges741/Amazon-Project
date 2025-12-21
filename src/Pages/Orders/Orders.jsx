import React, { useContext, useEffect, useState } from "react";
import Layout from "../../LayOut/Layout";
import styles from "./orders.module.css";
import { DataContext } from "../../Components/Data/DataProvider";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Products/ProductCard";
import { useLocation } from "react-router-dom";
const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>
          {location.state?.msg && (
            <div style={{ padding: "12px", color: "green" }}>
              {location.state.msg}
            </div>
          )}
          {orders?.length === 0 && (
            <div style={{ padding: "20px" }}>
              Your Basket is Empty!
              <p>After making a payment, your orders will appear here.</p>
            </div>
          )}
        </div>
        <div className={styles.product_ordered}>
          {orders
            ?.filter((o) => o?.data?.status === "completed")
            .map((eachOrders) => {
              return (
                <div key={eachOrders?.id}>
                  <hr />
                  <p>Order ID: {eachOrders?.id}</p>
                  {eachOrders?.data?.basket?.map((order) => (
                    <ProductCard
                      flex={true}
                      products={order}
                      key={order.id || order.title}
                    />
                  ))}
                </div>
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
