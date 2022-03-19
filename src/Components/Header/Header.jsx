import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
        <header>
            <nav className="navbar container">
                <div className="logo">
                    <h1>Versla</h1>
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
                        <Link to="/login" className={styles.login_btn}>Login</Link>
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