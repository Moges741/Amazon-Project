import amazon from "../../assets/images/image.png";
import US from '../../assets/images/unitedstates1960.png';
import styles from './footer.module.css';
import { TbWorld } from "react-icons/tb";
import {Link} from 'react-router-dom';    
const Footer = () => {
  return (
    <section className={styles.footer_container}>
      <div className={styles.links_container}>
        <div>
          <ul>
            <li className={styles.list_topic}> Get to Know Us </li>
            <li>
              <Link to="#"> Careers </Link>
            </li>
            <li>
              <Link to="#"> Blog </Link>
            </li>
            <li>
              <Link to="#"> About Amazon </Link>
            </li>
            <li>
              <Link to="#"> Investor Relations </Link>
            </li>
            <li>
              <Link to="#"> Amazon Devices </Link>
            </li>
            <li>
              <Link to="#"> Amazon Science </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Make Money With Us</li>
            <li>
              <Link to="#">Sell products on Amazon</Link>
            </li>
            <li>
              <Link to="#">Sell on Amazon Business</Link>
            </li>
            <li>
              <Link to="#">Sell apps on Amazon</Link>
            </li>
            <li>
              <Link to="#">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="#">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="#">Self-Publish with Us</Link>
            </li>
            <li>
              <Link to="#">Host an Amazon Hub</Link>
            </li>
            <li>
              <Link to="#"> See More Make Money with Us </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Amazon Payment Products</li>
            <li>
              <Link to="#">Amazon Business Card</Link>
            </li>
            <li>
              <Link to="#">Shop with Points</Link>
            </li>
            <li>
              <Link to="#">Reload Your Balance</Link>
            </li>
            <li>
              <Link to="#">Amazon Currently Converter</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className={styles.list_topic}>Let Us Help You</li>
            <li>
              <Link to="#">Amazon and Covid-19</Link>
            </li>
            <li>
              <Link to="#">Your Account</Link>
            </li>
            <li>
              <Link to="#">Your Orders</Link>
            </li>
            <li>
              <Link to="#">Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to="#">Return & Replacements</Link>
            </li>
            <li>
              <Link to="#">Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
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
