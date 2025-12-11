import React from "react";
import amazon from "../../assets/images/image.png";
import US from '../../assets/images/unitedstates1960.png'
import styles from './footer.module.css';
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.links_container}>
        <div>
          <ul>
            <li className={styles.list_topic}> Get to Know Us </li>
            <li>
              <a href=""> Careers </a>
            </li>
            <li>
              <a href=""> Blog </a>
            </li>
            <li>
              <a href=""> About Amazon </a>
            </li>
            <li>
              <a href=""> Investor Relations </a>
            </li>
            <li>
              <a href=""> Amazon Devices </a>
            </li>
            <li>
              <a href=""> Amazon Science </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Make Money With Us</li>
            <li>
              <a href="">Sell products on Amazon</a>
            </li>
            <li>
              <a href="">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="">Become an Affiliate</a>
            </li>
            <li>
              <a href="">Advertise Your Products</a>
            </li>
            <li>
              <a href="">Self-Publish with Us</a>
            </li>
            <li>
              <a href="">Host an Amazon Hub</a>
            </li>
            <li>
              <a href=""> See More Make Money with Us </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Amazon Payment Products</li>
            <li>
              <a href="">Amazon Business Card</a>
            </li>
            <li>
              <a href="">Shop with Points</a>
            </li>
            <li>
              <a href="">Reload Your Balance</a>
            </li>
            <li>
              <a href="">Amazon Currently Converter</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Let Us Help You</li>
            <li>
              <a href="">Amazon and Covid-19</a>
            </li>
            <li>
              <a href="">Your Account</a>
            </li>
            <li>
              <a href="">Your Orders</a>
            </li>
            <li>
              <a href="">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="">Return & Replacements</a>
            </li>
            <li>
              <a href="">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.feature_container}>
        <div>
          <img src={amazon} alt={amazon} />
        </div>
        <div>
          <button className={styles.english}>
            <TbWorld/>
            English</button>
        </div>
        <div>
          <button>USD - U.S. Dollar</button>
        </div>
        <div>
          <button>
            <img src={US} alt="" />
            United States</button>
        </div>

    
      </div>
    </section>
  );
};

export default Footer;
