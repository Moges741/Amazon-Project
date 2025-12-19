import React, { useContext, useState } from "react";
import styles from "./auth.module.css";
import logo from "../../assets/images/logo_PNG6.png";
import { Link } from "react-router-dom";
import {auth} from '../../Utility/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; //from fire base built in
import {DataContext} from '../../Components/Data/DataProvider'
import { ClipLoader } from "react-spinners";
import { Type } from "../../Utility/action.type";
import { useNavigate, useLocation } from "react-router-dom";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{user}, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({signIn:false, signUp:false});
  const navigate = useNavigate();
  const navData = useLocation();
  console.log(navData)
  const authHandler = async(e) =>{
  e.preventDefault();
  console.log(e.target.name)
  if (e.target.name === "signIn") {
    setLoading({...loading, signIn:true})
    // fireBase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
            setLoading({ ...loading, signIn: false });
            navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
            setLoading({ ...loading, signIn: false });

      });
  } else {
        setLoading({ ...loading, signUp: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");

      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading({ ...loading, signUp: false });
      });
  }
}
  return (
    <section className={styles.login_container}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className={styles.sign_part}>
        <h1>Sign-in</h1>

        <form action="" className={styles.form_container}>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={styles.first_sign}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
          <div>
            <p>
              By signing-in you agree to the AMAZON FAKE CLONE conditions of Use
              & Sale. Please see our Privacy Notice. Our Cookies Notice amd our
              Interest-Bases Ads Notice.
            </p>
            <button
              name="signUp"
              type="submit"
              onClick={authHandler}
              className={styles.create_account}
            >
              {loading.signUp ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Create your Amazon Account"
              )}
            </button>

            {error && (
              <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
export default Auth;
