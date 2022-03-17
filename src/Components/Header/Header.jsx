import "./Header.css";

const Header = () => {
    return (
        <>
        <header>
            <nav class="navbar container">
                <div class="logo">
                    <h1>Versla</h1>
                </div>
                <ul class="nav-links">
                    <li><span class="material-icons-outlined">search</span></li>
                    <li><span class="material-icons-outlined">favorite_border</span></li>
                    <li><span class="material-icons-outlined">shopping_bag</span></li>
                    <li class="login">
                        <a href="./Pages/login.html">Login</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;