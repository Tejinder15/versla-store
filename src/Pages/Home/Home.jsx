import Header from "../../Components/Header/Header";
import Categories from "../../Components/Categories/Categories";
import Deals from "../../Components/Deals/Deals";
import Trending from "../../Components/Trending/Trending";
import ecomm from "../../Images/ecomm.png";
import "./Home.css";
const Home = () => {
    return(
        <>
        <Header/>
    <main>
        <section className="hero-container container">
            <div className="hero-text-container">
                <h2 className="hero-text">Fashion as unique as you are.</h2>
                <p className="gray-text">Explore the New Fashion Trend with various categories and get Dressed.</p>
                <a href="" className="explore-btn">Explore</a>
            </div>
            <div className="hero-img-container">
                <img src={ecomm} alt="hero" className="hero-img"/>
            </div>
        </section>
        <Categories/>
        <Deals />
        <Trending />
    </main>
        </>
    );
}

export default Home;