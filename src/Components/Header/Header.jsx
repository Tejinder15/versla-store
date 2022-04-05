import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../../Context/AuthContext/auth-context";
import styles from "./Header.module.css";
import { useState } from "react";
import { useWishlist } from "../../Context/WishContext/wishlist-context";
import { useCart } from "../../Context/CartContext/cart-context";

const Header = () => {
  const { authState, authDispatch } = useAuth();
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const userName = authState.user;
  const redirect = useNavigate();

  const checkStatus = (userName) => {
    return userName ? "Logout" : "Login";
  };

  const logoutHandler = () => {
    redirect("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const userHandler = (type) => {
    type === "Login" ? redirect("/login") : logoutHandler();
  };

  const notifyHandler = () => {
    return wishlist.length > 0 ? true : false;
  };

  const [notifywish, serNotifyWish] = useState(notifyHandler);

  return (
    <>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <Link to="/">
              <h1 className={styles.logo}>Versla</h1>
            </Link>
          </div>
          <ul className={styles.nav_links}>
            <li>
              <span className="material-icons-outlined">search</span>
            </li>
            <li>
              <Link to="/wishlist" className={styles.nav_item}>
                <span className="material-icons-outlined">favorite_border</span>
              </Link>
              {wishlist.length > 0 ? (
                <div className={styles.notify_dot}></div>
              ) : (
                ""
              )}
            </li>
            <li>
              <Link to="/cart" className={styles.nav_item}>
                <span className="material-icons-outlined">shopping_bag</span>
              </Link>
              {cart.length > 0 ? <div className={styles.notify_dot}></div> : ""}
            </li>
            <li>
              {
                <button
                  className={styles.login_btn}
                  onClick={() => userHandler(checkStatus(userName))}
                >
                  {checkStatus(userName)}
                </button>
              }
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
