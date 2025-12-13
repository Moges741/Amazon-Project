import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/image.png'
import flag from '../../assets/images/unitedstates1960.png';
import styles from '../Header/header.module.css'
import '../GeneralStyle/bootstrap.css';
import {useContext} from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LowerHeader from './LowerHeader';
import SearchIcon from "@mui/icons-material/Search";
import { DataContext } from '../Data/DataProvider';
const Header = () => {
const [{basket}, dispatch] = useContext(DataContext);
// const totalItem = basket?.reduce((item, amount)=>{
//   return item.amount + amount;
// },0)
const totalItem =
  basket?.reduce(
    (amount, item) => amount + (item.quantity || item.amount || 1),
    0
  ) || 0;
  return (
    <>
      <section className={styles.fixed_position}>
        <section>
          <div className={styles.header_container}>
            <div className={styles.logo}>
              {" "}
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            {/* delivery */}
            <span>
              {/* icon */}
              <LocationOnIcon />
            </span>

            <div className={styles.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>

            <div className={styles.search}>
              {/* search */}
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              <SearchIcon size={45} />
            </div>
            {/* right side */}

            <Link to="" className={styles.language}>
              <img src={flag} alt="US Flag" />
              <section>
                <option value="">EN</option>
              </section>
            </Link>
            {/* three components */}

            <Link to="/auth" className={styles.other_link}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders" className={styles.other_link}>
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <ShoppingCartIcon size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header
