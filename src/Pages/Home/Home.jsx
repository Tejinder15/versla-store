import { Link } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Deals from "../../Components/Deals/Deals";
import Header from "../../Components/Header/Header";
import Trending from "../../Components/Trending/Trending";
import ecomm from "../../Images/ecomm.png";
import styles from "./Home.module.css";
const Home = () => {
    return(
        <>
        <Header />
        <section className={`${styles.hero_container} container`}>
            <div className={styles.hero_text_container}>
                <h2 className={styles.hero_text}>Fashion as unique as you are.</h2>
                <p className={`${styles.gray_text} gray-text`}>Explore the New Fashion Trend with various categories and get Dressed.</p>
                <Link to="/product" className={styles.explore_btn}>Explore</Link>
            </div>
            <div className={styles.hero_img_container}>
                <img src={ecomm} alt="hero" className={styles.hero_img}/>
            </div>
        </section>
        <Categories/>
        <Deals />
        <Trending />
        </>
    );
}

export {Home};