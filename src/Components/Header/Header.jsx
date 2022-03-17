import "./Header.css";

const Header = () => {
    return (
        <>
        <header>
            <nav className="navbar container">
                <div className="logo">
                    <h1>Versla</h1>
                </div>
                <ul className="nav-links">
                    <li><span className="material-icons-outlined">search</span></li>
                    <li><span className="material-icons-outlined">favorite_border</span></li>
                    <li><span className="material-icons-outlined">shopping_bag</span></li>
                    <li className="login-btn">
                        Login
                    </li>
                </ul>
                <div className="hamburger">
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