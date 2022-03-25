import { Link } from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../Context/AuthContext/auth-context";
import styles from "./Header.module.css";

const Header = () => {
    const {authState,authDispatch} = useAuth();
    const userName = authState.user;
    const redirect = useNavigate();

    const checkStatus = (userName) => {
        return userName ? "Logout" : "Login";
    }

    const logoutHandler = () => {
        redirect("/");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({type:"LOGOUT"});
    }

    const userHandler = (type) => {
        type === "Login" ? redirect("/login"): logoutHandler();
    }
    return (
        <>
        <header>
            <nav className="navbar container">
                <div className="logo">
                    <Link to="/"><h1 className={styles.logo}>Versla</h1></Link>
                </div>
                <ul className={styles.nav_links}>
                    <li><span className="material-icons-outlined">search</span></li>
                    <li>
                        <Link to="/wishlist" className={styles.nav_item}>
                            <span className="material-icons-outlined">favorite_border</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className={styles.nav_item}>
                            <span className="material-icons-outlined">shopping_bag</span>
                        </Link>
                    </li>
                    <li>
                        {
                            <button className={styles.login_btn} onClick={() => userHandler(checkStatus(userName))}>{checkStatus(userName)}</button>
                        }
                    </li>
                </ul>
                <div className={styles.hamburger}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;