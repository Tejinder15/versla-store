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
                    <li><span className="material-icons-outlined">favorite_border</span></li>
                    <li><span className="material-icons-outlined">shopping_bag</span></li>
                    <li className={styles.login_btn}>
                        Login
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