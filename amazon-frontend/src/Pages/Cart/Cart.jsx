import React, { useContext } from 'react'
import Layout from '../../LayOut/Layout'
import { DataContext } from '../../Components/Data/DataProvider'
import ProductCard from '../../Components/Products/ProductCard';
import styles from './cart.module.css'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom';

const Cart = () => {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item)=>{
    return item.price + amount
  } , 0)
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
                  <ProductCard
                    key={id}
                    products={item}
                    productDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
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
}

export default Cart
