import React, { useContext } from 'react'
import Layout from '../../LayOut/Layout'
import { DataContext } from '../../Components/Data/DataProvider'
import ProductCard from '../../Components/Products/ProductCard';
import styles from './cart.module.css'
const Cart = () => {
  const [{basket, user}, dispatch] = useContext(DataContext);
  return (
    <Layout>
      <section>
        <div>
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
                  />
                  
                );
              })
            )
            }
          </div>
        </div>
        <div></div>
      </section>
    </Layout>
  );
}

export default Cart
