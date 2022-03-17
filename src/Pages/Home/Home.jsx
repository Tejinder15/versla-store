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
        <section class="hero-container container">
            <div class="hero-text-container">
                <h2 class="hero-text">Fashion as unique as you are.</h2>
                <p class="gray-text">Explore the New Fashion Trend with various categories and get Dressed.</p>
                {/* TODO: replace this with the other thing as this will cause reload */}
                <a href="" class="explore-btn">Explore</a>
            </div>
            <div class="hero-img-container">
                <img src={ecomm} alt="hero" class="hero-img"/>
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