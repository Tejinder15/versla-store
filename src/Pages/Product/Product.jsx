import Header from "../../Components/Header/Header";
import product from "../../Images/product.png";
import styles from "./Product.module.css";
const Product = () => {
    function handleRange(e){
        console.log(e.target.value);
    }
    return (
        <>
        <Header />
        <div className="container">
            <aside className={styles.filter_panel}>
            <div className={styles.filter_option}>
                <h3>Filters</h3>
                <button className={styles.clear_btn}>Clear</button>
            </div>
            <div className="price-option">
                <h3>Price</h3>
                <div className={styles.price_value}>
                    <span>1k</span>
                    <span>2k</span>
                    <span>3k</span>
                    <span>4k</span>
                    <span>5k</span>
                </div>
                <input type="range" name="price_range" step={1000} min={1000} max={5000} onInput={handleRange}/>
            </div>
            <div className="category-option">
                <h3>Category</h3>
                <div className="input-option">
                    <input type="checkbox" name="men" id="men"/>
                    <label htmlFor="men">Men Clothing</label>
                </div>
                <div className="input-option">
                    <input type="checkbox" name="women" id="women"/>
                    <label htmlFor="women">women Clothing</label>
                </div>
            </div>
            <div className="rating-option">
                <h3>Rating</h3>
                <div className="input-option">
                    <input type="radio" name="stars" id="4stars"/>
                    <label htmlFor="4stars">4 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="3stars"/>
                    <label htmlFor="3stars">3 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="2stars"/>
                    <label htmlFor="2stars">2 Stars &#38; above</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="stars" id="1stars"/>
                    <label htmlFor="1stars">1 Stars &#38; above</label>
                </div>
            </div>
            <div className="sortby-option">
                <h3>Sort by</h3>
                <div className="input-option">
                    <input type="radio" name="sort" id="low_to_high"/>
                    <label htmlFor="low_to_high">Price - Low to High</label>
                </div>
                <div className="input-option">
                    <input type="radio" name="sort" id="high_to_low"/>
                    <label htmlFor="high_to_low">Price - High to Low</label>
                </div>
            </div>
        </aside>
        <main>
            <div className="container">
                <div className={`wishlist-container ${styles.products_container}`}>
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined ">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title center-text">Men Premium Jacket</p>
                                <h3 className="product-price center-text">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
        
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title center-text">Men Premium Jacket</p>
                                <h3 className="product-price center-text">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
        
                    <div className="basic-card">
                        <div className="basic-card-image-title badge-image-title">
                            <div className="product-image-container">
                                <img src={product} alt="photo" className="basic-card-image"/>
                            </div>
                            <span className="dot"><span className="material-icons-outlined heart">favorite_border</span></span>
                        </div>
                        <div className="basic-card-details">
                            <div className="basic-card-secondary">
                                <p className="product-title center-text">Men Premium Jacket</p>
                                <h3 className="product-price center-text">&#8377;2000</h3>
                            </div>
                        </div>
                        <div className="basic-card-actions">
                            <button className="move-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
        </>
    );
}

export default Product;