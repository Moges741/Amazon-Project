import React from 'react'
import logo from '../../assets/images/image.png'
import flag from '../../assets/images/unitedstates1960.png';
import styles from '../Header/header.module.css'
import '../GeneralStyle/bootstrap.css';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LowerHeader from './LowerHeader';
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            {" "}
            <a href="#">
              <img src={logo} />
            </a>
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

          <a href="" className={styles.language}>
            <img src={flag} alt="US Flag" />
            <section>
              <option value="">EN</option>
            </section>
          </a>
          {/* three components */}

          <a href="" className={styles.other_link}>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          {/* orders */}
          <a href="" className={styles.other_link}>
            <p>returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={styles.cart}>
            <ShoppingCartIcon size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header
